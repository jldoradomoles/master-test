import { renderHook, act } from '@testing-library/react';
import { useConfirmationDialog } from './confirmation-dialog.hook';

describe('useConfirmationDialog', () => {
  it('should initialize with default values', () => {
    const { result } = renderHook(() => useConfirmationDialog());

    expect(result.current.isOpen).toBe(false);
  });

  it('should open the dialog with a message', () => {
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog({ id: '1', name: 'Test' });
    });

    expect(result.current.isOpen).toBe(true);
  });

  it('should close the dialog', () => {
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog({ id: '1', name: 'Test' });
    });

    act(() => {
      result.current.onClose();
    });

    expect(result.current.isOpen).toBe(false);
  });

  it('should accept the dialog', () => {
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog({ id: '1', name: 'Test' });
    });

    act(() => {
      result.current.onAccept();
    });

    expect(result.current.itemToDelete).toStrictEqual({ id: '', name: '' });
  });
});
