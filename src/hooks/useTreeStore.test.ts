import { useTreeStore } from '@/hooks/useTreeStore';
import { act } from '@testing-library/react-native';

describe('useTreeStore', () => {
  beforeEach(() => {
    const { setState } = useTreeStore;
    setState({
      expanded: {},
      loading: {},
      visibleFlatNodes: [],
      nodesByRoot: {},
      pageInfoByRoot: {}
    });
  });

  it('sets nodes and flattens correctly when expanded', () => {
    const { setExpanded, setNodesByRoot } = useTreeStore.getState();

    act(() => {
      setExpanded('__root__', true);
      setNodesByRoot('__root__', [
        { id: '1', name: 'A', kind: 'FolderNode', parentNodeId: null },
      ]);
      setNodesByRoot('1', [
        { id: '2', name: 'B', kind: 'FileNode', parentNodeId: '1' },
      ]);
      setExpanded('1', true);
    });

    const visible = useTreeStore.getState().visibleFlatNodes.map(v => v.node.name);
    expect(visible).toEqual(['A', 'B']);
  });

  it('does not show children when folder is collapsed', () => {
    const { setExpanded, setNodesByRoot } = useTreeStore.getState();

    act(() => {
      setExpanded('__root__', true);
      setNodesByRoot('__root__', [
        { id: '1', name: 'A', kind: 'FolderNode', parentNodeId: null },
      ]);
      setNodesByRoot('1', [
        { id: '2', name: 'B', kind: 'FileNode', parentNodeId: '1' },
      ]);
      setExpanded('1', false);
    });

    const visible = useTreeStore.getState().visibleFlatNodes.map(v => v.node.name);
    expect(visible).toEqual(['A']);
  });

  it('correctly flattens a nested tree', () => {
    const { setExpanded, setNodesByRoot } = useTreeStore.getState();

    act(() => {
      setExpanded('__root__', true);
      setNodesByRoot('__root__', [
        { id: '1', name: 'A', kind: 'FolderNode', parentNodeId: null },
        { id: '2', name: 'B', kind: 'FileNode',   parentNodeId: null },
        { id: '3', name: 'C', kind: 'FolderNode', parentNodeId: null },
        { id: '4', name: 'D', kind: 'FolderNode', parentNodeId: null },
        { id: '5', name: 'E', kind: 'FolderNode', parentNodeId: null },
        { id: '6', name: 'F', kind: 'FolderNode', parentNodeId: null },
        { id: '7', name: 'G', kind: 'FileNode',   parentNodeId: null },
      ]);
      setNodesByRoot('1', [
        { id: '1.1', name: 'AA', kind: 'FileNode', parentNodeId: '1' },
        { id: '1.2', name: 'AB', kind: 'FileNode', parentNodeId: '1' },
      ]);
      setNodesByRoot('3', [
        { id: '3.1', name: 'CA', kind: 'FileNode', parentNodeId: '1' },
        { id: '3.2', name: 'CB', kind: 'FileNode', parentNodeId: '1' },
      ]);
      setNodesByRoot('5', [
        { id: '5.1', name: 'EA', kind: 'FileNode', parentNodeId: '1' },
        { id: '5.2', name: 'EB', kind: 'FolderNode', parentNodeId: '1' },
      ]);
      setNodesByRoot('5.2', [
        { id: '5.2.1', name: 'EBA', kind: 'FileNode', parentNodeId: '1' },
        { id: '5.2.2', name: 'EBB', kind: 'FileNode', parentNodeId: '1' },
      ]);
    });

    const visibleBeforeExpand = useTreeStore.getState().visibleFlatNodes.map(v => v.node.name);
    expect(visibleBeforeExpand).toEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G']);

    act(() => { for(const id of ['1', '3', '5', '5.2']) setExpanded(id, true); });

    const visibleAfterExpand = useTreeStore.getState().visibleFlatNodes.map(v => v.node.name);
    expect(visibleAfterExpand).toEqual([
      'A',
        'AA',
        'AB',
      'B',
      'C',
        'CA',
        'CB',
      'D',
      'E',
        'EA',
        'EB',
          'EBA',
          'EBB',
      'F',
      'G'
    ]);

    act(() => {
      setExpanded('5', false);
    });

    const visibleAfterCollapse = useTreeStore.getState().visibleFlatNodes.map(v => v.node.name);
    expect(visibleAfterCollapse).toEqual([
      'A',
        'AA',
        'AB',
      'B',
      'C',
        'CA',
        'CB',
      'D',
      'E',
      'F',
      'G'
    ]);
  });
});
