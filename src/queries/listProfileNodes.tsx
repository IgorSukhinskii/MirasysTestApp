import { FieldPolicy, gql } from '@apollo/client';
import { relayStylePagination } from '@apollo/client/utilities';


export type ProfileNode = {
  id: string;
  name: string;
  kind: string;
  parentNodeId: string | null;
};

export type ProfileEdge = {
  cursor: string;
  node: ProfileNode;
}

export type ListProfileNodesQueryData = {
  listProfileNodes: {
    edges: [ProfileEdge];
    pageInfo: {
      hasNextPage: boolean;
      endCursor: string;
    };
  };
};

export const LIST_PROFILE_NODES = gql`
query ListProfileNodes($parentNodeId: String, $first: Int!, $after: String) {
  listProfileNodes(where: {parentNodeId: {eq: $parentNodeId}}, first: $first, after: $after) {
    edges {
      cursor
      node {
        id
        kind
        name
        parentNodeId
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}`;

export const listProfileNodesCachePolicy: FieldPolicy<any> = {
  ...relayStylePagination(),
  keyArgs: (args) => {
    // Key by nested parentNodeId.eq inside `where`
    return args?.where?.parentNodeId?.eq ?? '__null__';
  },
};
