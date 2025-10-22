import { useApolloClient } from "@apollo/client/react";
import type { Subscription } from "rxjs";

import { useTreeStore } from "@/hooks/useTreeStore";
import { ListProfileNodes } from "@/queries/listProfileNodes";

const activeWatchers = new Map<string | null, Subscription>();
const ROOT_ID = "__root__"; // TODO: extract

export function useFolderActions() {
  const client = useApolloClient();
  const {
    expanded,
    setExpanded,
    loading,
    setLoading,
    setNodesByRoot,
    pageInfoByRoot,
    setPageInfoByRoot
  } = useTreeStore();

  function watchFolder(folderId: string | null) {
    const key = folderId ?? ROOT_ID;
    if (activeWatchers.has(key)) return;

    const watcher = client
      .watchQuery({
        query: ListProfileNodes,
        variables: { parentNodeId: folderId, first: 50 },
        fetchPolicy: "cache-only",
      })
      .subscribe({
        next: (result) => {
          const edges = result.data?.listProfileNodes?.edges ?? [];
          // using (e: any) because generated types lie about stuff being optional
          const nodes = edges.map((e: any) => e.node);
          setNodesByRoot(key, nodes);

          const pageInfo = result.data?.listProfileNodes?.pageInfo;
          // generated types being funny again
          // apparently pageInfo.endCursor can be either null or undefined
          // therefore just cast this to any and be done with it
          if (pageInfo) setPageInfoByRoot(key, pageInfo as any);
        },
      });

    activeWatchers.set(key, watcher);
  }

  function toggleFolder(folderId: string | null) {
    const key = folderId ?? ROOT_ID;
    const nextExpanded = !expanded[key];
    setExpanded(key, nextExpanded);

    if (!nextExpanded) return;

    watchFolder(folderId);

    // Fetch if empty
    const existing = client.readQuery({
      query: ListProfileNodes,
      variables: { parentNodeId: folderId, first: 50 },
    });
    if (!existing?.listProfileNodes?.edges?.length) {
      setLoading(key, true);
      client
        .query({
          query: ListProfileNodes,
          variables: { parentNodeId: folderId, first: 50 },
          fetchPolicy: "network-only",
        })
        .catch(e => console.error('Fetching', e))
        .finally(() => setLoading(key, false));
    }
  }

  function fetchMoreForFolder(folderId: string | null) {
    const key = folderId ?? ROOT_ID;
    const pageInfo = pageInfoByRoot[key];

    if (!pageInfo?.hasNextPage || !pageInfo.endCursor) return;

    if (loading[key]) return; // prevent concurrent loads for the same folder

    setLoading(key, true);
    client.query({
      query: ListProfileNodes,
      variables: {
        parentNodeId: folderId,
        first: 50,
        after: pageInfo.endCursor
      },
      fetchPolicy: "network-only",
    }).finally(() => setLoading(key, false));
  }


  function cleanup() {
    for (const sub of activeWatchers.values()) sub.unsubscribe();
    activeWatchers.clear();
  }

  return { toggleFolder, fetchMoreForFolder, cleanup };
}
