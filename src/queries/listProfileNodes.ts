import { graphql } from '@/graphql';
import { FieldPolicy } from '@apollo/client';
import { relayStylePagination } from '@apollo/client/utilities';


export const ListProfileNodes = graphql(`
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
}`);

export const listProfileNodesCachePolicy: FieldPolicy<any> = {
  ...relayStylePagination(),
  keyArgs: (args) => {
    // Key by nested parentNodeId.eq inside `where`
    return args?.where?.parentNodeId?.eq ?? '__null__';
  },
};
