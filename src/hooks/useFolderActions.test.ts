import { useFolderActions } from '@/hooks/useFolderActions';
import { useTreeStore } from '@/hooks/useTreeStore';
import { act, renderHook } from '@testing-library/react-native';

const mockWatchQuery = jest.fn();
const mockReadQuery = jest.fn();
const mockQuery = jest.fn();

const ROOT_ID = '__root__';

jest.mock('@apollo/client/react', () => ({
  useApolloClient: () => ({
    watchQuery: mockWatchQuery,
    readQuery: mockReadQuery,
    query: mockQuery,
  }),
}));

function deferred<T>() {
  let resolve!: (value: T) => void;
  let reject!: (reason?: any) => void;
  const promise = new Promise<T>((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
}

beforeEach(() => {
  mockWatchQuery.mockImplementation(() => ({
    subscribe: ({ next }: any) => {
      next({
        data: {
          listProfileNodes: {
            edges: [
              { node: { id: '1', name: 'Folder A', kind: 'FolderNode', parentNodeId: null } },
            ],
          },
        },
      });
      return { unsubscribe: jest.fn() };
    },
  }));

  // Simulate no cached data
  mockReadQuery.mockReturnValue(undefined);

  // Simulate query() fetching data synchronously
  mockQuery.mockResolvedValue({
    data: {
      listProfileNodes: {
        edges: [
          { node: { id: '2', name: 'Fetched Child', kind: 'FileNode', parentNodeId: '1' } },
        ],
      },
    },
  });

  // clear the store
  useTreeStore.setState({
    expanded: {},
    loading: {},
    nodesByRoot: {},
    pageInfoByRoot: {},
    visibleFlatNodes: []
  });

  jest.clearAllMocks();
});

describe('useFolderActions', () => {
  describe('toggleFolder', () => {
    it('updates tree store when toggling a folder', async () => {
      const { result } = renderHook(() => useFolderActions());
      const { getState } = useTreeStore;

      await act(async () => {
        await result.current.toggleFolder('__root__');
      });

      const visible = getState().visibleFlatNodes.map(v => v.node.name);
      expect(visible).toContain('Folder A');

      expect(mockWatchQuery).toHaveBeenCalled();
      expect(mockReadQuery).toHaveBeenCalled();
    });
  });

  describe('fetchMoreForFolder', () => {
    it('does nothing if hasNextPage is false', async () => {
      useTreeStore.setState({ pageInfoByRoot: { [ROOT_ID]: { hasNextPage: false, endCursor: 'cursor1' } } });
      const { result } = renderHook(() => useFolderActions());

      await act(async () => {
        await result.current.fetchMoreForFolder(null);
      });

      expect(mockQuery).not.toHaveBeenCalled();
      expect(useTreeStore.getState().loading[ROOT_ID]).toBeUndefined();
    });

    it('does nothing if endCursor is null', async () => {
      useTreeStore.setState({ pageInfoByRoot: { [ROOT_ID]: { hasNextPage: true, endCursor: null } } });
      const { result } = renderHook(() => useFolderActions());

      await act(async () => {
        await result.current.fetchMoreForFolder(null);
      });

      expect(mockQuery).not.toHaveBeenCalled();
    });

    it('calls client.query with correct variables and sets loading', async () => {
      const pageInfo = { hasNextPage: true, endCursor: 'cursor1' };
      useTreeStore.setState({ pageInfoByRoot: { [ROOT_ID]: pageInfo } });

      // mock query to resolve immediately
      mockQuery.mockResolvedValue({ data: { listProfileNodes: { edges: [] } } });

      const { result } = renderHook(() => useFolderActions());

      await act(async () => {
        const promise = result.current.fetchMoreForFolder(null);

        // loading should be true immediately
        expect(useTreeStore.getState().loading[ROOT_ID]).toBe(true);

        await promise;
      });

      // loading should be false after fetch
      expect(useTreeStore.getState().loading[ROOT_ID]).toBe(false);

      // query called with correct pagination
      expect(mockQuery).toHaveBeenCalledWith(
        expect.objectContaining({
          variables: { parentNodeId: null, first: 50, after: 'cursor1' },
          fetchPolicy: 'network-only',
        })
      );
    });
  });
});
