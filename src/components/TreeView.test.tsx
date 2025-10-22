import { fireEvent, render, screen, waitFor } from '@testing-library/react-native';
import React from 'react';
import { TreeView } from './TreeView';

const mockToggleFolder = jest.fn();
const mockFetchMoreForFolder = jest.fn();

jest.mock('@/hooks/useFolderActions', () => ({
  useFolderActions: () => ({
    toggleFolder: mockToggleFolder,
    fetchMoreForFolder: mockFetchMoreForFolder,
  }),
}));

jest.mock('@/hooks/useTreeStore', () => ({
  useTreeStore: jest.fn(),
}));

import { useTreeStore } from '@/hooks/useTreeStore';

const ROOT_ID = '__root__';

describe('TreeView', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders flat list of nodes', () => {
    (useTreeStore as unknown as jest.Mock).mockReturnValue({
      visibleFlatNodes: [
        { node: { id: '1', name: 'Folder A', kind: 'FolderNode', parentNodeId: null }, level: 0 },
        { node: { id: '2', name: 'File B', kind: 'FileNode', parentNodeId: '1' }, level: 1 },
      ],
      expanded: { [ROOT_ID]: true, '1': true },
      loading: {},
    });

    render(<TreeView />);

    expect(screen.getByText(/Folder A/)).toBeTruthy();
    expect(screen.getByText(/File B/)).toBeTruthy();
  });

  it('calls toggleFolder on mount for root expansion', async () => {
    (useTreeStore as unknown as jest.Mock).mockReturnValue({
      visibleFlatNodes: [],
      expanded: {},
      loading: {},
    });

    render(<TreeView />);

    await waitFor(() => {
      expect(mockToggleFolder).toHaveBeenCalledWith(null);
    });
  });

  it('calls toggleFolder when tapping a folder', () => {
    (useTreeStore as unknown as jest.Mock).mockReturnValue({
      visibleFlatNodes: [
        { node: { id: '1', name: 'Folder A', kind: 'FolderNode', parentNodeId: null }, level: 0 },
      ],
      expanded: { [ROOT_ID]: true },
      loading: {},
    });

    const { getByText } = render(<TreeView />);
    fireEvent.press(getByText('Folder A'));

    expect(mockToggleFolder).toHaveBeenCalledWith('1');
  });

  it('does not call toggleFolder when tapping a non-folder node', () => {
    (useTreeStore as unknown as jest.Mock).mockReturnValue({
      visibleFlatNodes: [
        { node: { id: '1', name: 'File A', kind: 'AlarmNode', parentNodeId: null }, level: 0 },
      ],
      expanded: { [ROOT_ID]: true },
      loading: {},
    });

    const { getByText } = render(<TreeView />);
    fireEvent.press(getByText('File A'));

    expect(mockToggleFolder).not.toHaveBeenCalled();
  });

  it('calls fetchMoreForFolder on scroll end', () => {
    (useTreeStore as unknown as jest.Mock).mockReturnValue({
      visibleFlatNodes: [
        { node: { id: '1', name: 'Folder A', kind: 'FolderNode', parentNodeId: null }, level: 0 },
      ],
      expanded: { [ROOT_ID]: true },
      loading: {},
    });

    render(<TreeView />);
    const flatList = screen.UNSAFE_getByType(require('react-native').FlatList);
    flatList.props.onEndReached();

    expect(mockFetchMoreForFolder).toHaveBeenCalledWith(null);
  });
});
