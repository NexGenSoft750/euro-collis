import { useState, useEffect, useCallback, useRef } from 'react';

interface UseDropdownKeyboardProps {
    items: string[];
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    onSelect: (item: string, index: number) => void;
    initialSelectedItem?: string;
}

interface UseDropdownKeyboardReturn {
    focusedIndex: number;
    selectedItem: string;
    setFocusedIndex: (index: number) => void;
    setSelectedItem: (item: string) => void;
    handleButtonKeyDown: (e: React.KeyboardEvent) => void;
    handleMenuItemClick: (item: string, index: number) => void;
    handleMenuItemKeyDown: (e: React.KeyboardEvent, index: number) => void;
    handleMouseEnter: (index: number) => void;
    buttonRef: React.RefObject<HTMLButtonElement | null>;
    menuRef: React.RefObject<HTMLUListElement | null>;
}

export const useDropdownKeyboard = ({
    items,
    isOpen,
    onOpen,
    onClose,
    onSelect,
    initialSelectedItem = ''
}: UseDropdownKeyboardProps): UseDropdownKeyboardReturn => {
    const [focusedIndex, setFocusedIndex] = useState<number>(-1);
    const [selectedItem, setSelectedItem] = useState<string>(initialSelectedItem);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const menuRef = useRef<HTMLUListElement>(null);
    const isProcessingRef = useRef<boolean>(false);

    // Reset focused index when menu closes
    useEffect(() => {
        if (!isOpen) {
            setFocusedIndex(-1);
            isProcessingRef.current = false;
        }
    }, [isOpen]);

    // Prevent event processing overlap
    const withProcessingLock = useCallback((callback: () => void) => {
        if (isProcessingRef.current) return;
        isProcessingRef.current = true;
        callback();
        setTimeout(() => {
            isProcessingRef.current = false;
        }, 50);
    }, []);

    const handleButtonKeyDown = useCallback((e: React.KeyboardEvent) => {
        withProcessingLock(() => {
            switch (e.key) {
                case 'ArrowDown':
                    e.preventDefault();
                    e.stopPropagation();
                    if (!isOpen) {
                        onOpen();
                        setFocusedIndex(0);
                    } else {
                        setFocusedIndex(prev =>
                            prev < items.length - 1 ? prev + 1 : 0
                        );
                    }
                    break;

                case 'ArrowUp':
                    e.preventDefault();
                    e.stopPropagation();
                    if (!isOpen) {
                        onOpen();
                        setFocusedIndex(items.length - 1);
                    } else {
                        setFocusedIndex(prev =>
                            prev > 0 ? prev - 1 : items.length - 1
                        );
                    }
                    break;

                case 'Enter':
                    e.preventDefault();
                    e.stopPropagation();
                    if (!isOpen) {
                        onOpen();
                        setFocusedIndex(0);
                    } else if (focusedIndex >= 0 && focusedIndex < items.length) {
                        const item = items[focusedIndex];
                        setSelectedItem(item);
                        onSelect(item, focusedIndex);
                        onClose();
                        setTimeout(() => buttonRef.current?.focus(), 0);
                    }
                    break;

                case ' ':
                    e.preventDefault();
                    e.stopPropagation();
                    if (!isOpen) {
                        onOpen();
                        setFocusedIndex(0);
                    } else if (focusedIndex >= 0 && focusedIndex < items.length) {
                        const item = items[focusedIndex];
                        setSelectedItem(item);
                        onSelect(item, focusedIndex);
                        onClose();
                        setTimeout(() => buttonRef.current?.focus(), 0);
                    }
                    break;

                case 'Escape':
                    e.preventDefault();
                    e.stopPropagation();
                    if (isOpen) {
                        onClose();
                        setTimeout(() => buttonRef.current?.focus(), 0);
                    }
                    break;

                case 'Home':
                    if (isOpen) {
                        e.preventDefault();
                        e.stopPropagation();
                        setFocusedIndex(0);
                    }
                    break;

                case 'End':
                    if (isOpen) {
                        e.preventDefault();
                        e.stopPropagation();
                        setFocusedIndex(items.length - 1);
                    }
                    break;

                case 'Tab':
                    if (isOpen) {
                        onClose();
                    }
                    break;
            }
        });
    }, [isOpen, items, focusedIndex, onOpen, onClose, onSelect, withProcessingLock]);

    const handleMenuItemClick = useCallback((item: string, index: number) => {
        withProcessingLock(() => {
            setSelectedItem(item);
            setFocusedIndex(index);
            onSelect(item, index);
            onClose();
            setTimeout(() => buttonRef.current?.focus(), 0);
        });
    }, [onSelect, onClose, withProcessingLock]);

    const handleMenuItemKeyDown = useCallback((e: React.KeyboardEvent, index: number) => {
        withProcessingLock(() => {
            switch (e.key) {
                case 'Enter':
                case ' ':
                    e.preventDefault();
                    e.stopPropagation();
                    if (index >= 0 && index < items.length) {
                        const item = items[index];
                        setSelectedItem(item);
                        onSelect(item, index);
                        onClose();
                        setTimeout(() => buttonRef.current?.focus(), 0);
                    }
                    break;

                case 'Escape':
                    e.preventDefault();
                    e.stopPropagation();
                    onClose();
                    setTimeout(() => buttonRef.current?.focus(), 0);
                    break;
            }
        });
    }, [items, onSelect, onClose, withProcessingLock]);

    const handleMouseEnter = useCallback((index: number) => {
        if (!isProcessingRef.current) {
            setFocusedIndex(index);
        }
    }, []);

    return {
        focusedIndex,
        selectedItem,
        setFocusedIndex,
        setSelectedItem,
        handleButtonKeyDown,
        handleMenuItemClick,
        handleMenuItemKeyDown,
        handleMouseEnter,
        buttonRef,
        menuRef
    };
};