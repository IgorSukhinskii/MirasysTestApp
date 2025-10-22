import { useEffect } from "react";
import { ActivityIndicator, FlatList, TouchableOpacity } from "react-native";

import { Text, View } from "@/components/Themed";
import { useFolderActions } from "@/hooks/useFolderActions";
import { useTreeStore } from "@/hooks/useTreeStore";

const ROOT_ID = "__root__"; // TODO: extract

export function TreeView() {
  const { visibleFlatNodes, expanded, loading } = useTreeStore();
  const { toggleFolder, fetchMoreForFolder } = useFolderActions();

  const isRootExpanded = expanded[ROOT_ID];
  // Expand root automatically once
  // TODO: do it better somehow, ROOT_ID/null is a mess, and useEffect is ugly
  useEffect(() => {
    if (!isRootExpanded) toggleFolder(null);
  }, [isRootExpanded]);

  return (
    <FlatList
      data={visibleFlatNodes}
      keyExtractor={(item) => item.node.id}
      contentContainerStyle={{ paddingBottom: 200 }}
      renderItem={({ item }) => {
        const isFolder = item.node.kind === "FolderNode";
        const isExpanded = expanded[item.node.id];
        const isLoading = loading[item.node.id];

        return (
          <TouchableOpacity
            disabled={!isFolder}
            onPress={() => isFolder && toggleFolder(item.node.id)}
          >
            <View style={{ marginLeft: item.level * 16, flexDirection: "row", height: 40 }}>
              {isFolder ? (
                <>
                  <Text style={textStyle}>{isExpanded ? "📂" : "📁"}</Text>
                  {isLoading && <ActivityIndicator size="small" />}
                </>
              ) : (
                <Text style={textStyle}>📄</Text>
              )}
              <Text style={textStyle}> {item.node.name}</Text>
            </View>
          </TouchableOpacity>
        );
      }}
      onEndReachedThreshold={0.2}
      onEndReached={() => {
        // Find last visible folder in your flat list
        const last = visibleFlatNodes[visibleFlatNodes.length - 1];
        if (!last) return;
        fetchMoreForFolder(last.node.parentNodeId ?? null);
      }}
      ListFooterComponent={() => {
        if (loading[ROOT_ID]) {
          return (<ActivityIndicator size="large" />);
        }
      }}
    />
  );
}

const textStyle = { fontSize: 24 };
