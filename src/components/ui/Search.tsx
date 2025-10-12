"use client";

import React, { forwardRef, useState } from "react";
import clsx from "clsx";
import CoreButton from "./Button";
import styles from './Search.module.scss';
import { useDropdownKeyboard, useOutsideClick } from "@/hooks";

interface CommonSearchProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
}

interface MenuProps extends React.HTMLAttributes<HTMLUListElement> {
    open?: boolean;
}

interface MenuItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
    active?: boolean;
}

const OuterWrapper = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ children, className, ...props }, ref) => (
        <div
            ref={ref}
            className={clsx(styles.outerWrapper, className)}
            {...props}
        >
            {children}
        </div>
    )
);
OuterWrapper.displayName = "SearchOuterWrapper";

const InnerWrapper = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ children, className, ...props }, ref) => (
        <div ref={ref} className={clsx("flex", className)} {...props}>
            {children}
        </div>
    )
);
InnerWrapper.displayName = "SearchInnerWrapper";

const Button = forwardRef<HTMLButtonElement, CommonSearchProps>(
    ({ children, className, ...props }, ref) => (
        <CoreButton
            ref={ref}
            className={clsx(styles.searchButton, className)}
            {...props}
        >
            {children}
        </CoreButton>
    )
);
Button.displayName = "SearchButton";

const Menu = forwardRef<HTMLUListElement, MenuProps>(
    ({ children, open = false, className, ...props }, ref) => {
        if (!open) return null;
        return (
            <ul
                ref={ref}
                role="listbox"
                className={clsx(styles.menu, className)}
                {...props}
            >
                {children}
            </ul>
        );
    }
);
Menu.displayName = "SearchMenu";

const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>(
    ({ children, active = false, className, ...props }, ref) => (
        <li
            ref={ref}
            className={clsx(
                styles.menuItem,
                active && styles.menuItemActive,
                className
            )}
            {...props}
        >
            {children}
        </li>
    )
);
MenuItem.displayName = "SearchMenuItem";

const LocationSelector = ({
    label,
    locations
}: {
    label: string;
    locations: string[]
}) => {
    const [open, setOpen] = useState<boolean>(false);

    const {
        focusedIndex,
        selectedItem,
        handleButtonKeyDown,
        handleMenuItemClick,
        handleMenuItemKeyDown,
        handleMouseEnter,
        buttonRef,
        menuRef
    } = useDropdownKeyboard({
        items: locations,
        isOpen: open,
        onOpen: () => setOpen(true),
        onClose: () => setOpen(false),
        onSelect: (item) => {
            console.log('Selected:', item);
        },
        initialSelectedItem: label
    });

    useOutsideClick(menuRef, () => setOpen(false));

    return (
        <div className="relative">
            <button
                ref={buttonRef}
                aria-expanded={open}
                aria-haspopup="listbox"
                aria-label={`Select location: ${selectedItem}`}
                className={clsx(
                    styles.locationButton,
                    "inline-flex items-center mt-1 text-lg cursor-pointer focus:outline-none"
                )}
                onClick={() => setOpen(!open)}
                onKeyDown={handleButtonKeyDown}
            >
                {selectedItem}
            </button>
            <Menu ref={menuRef} open={open}>
                {locations.map((loc, index) => (
                    <MenuItem
                        key={loc}
                        role="option"
                        aria-selected={selectedItem === loc}
                        active={index === focusedIndex}
                        tabIndex={-1}
                        onClick={() => handleMenuItemClick(loc, index)}
                        onKeyDown={(e) => handleMenuItemKeyDown(e, index)}
                        onMouseEnter={() => handleMouseEnter(index)}
                        className={clsx(
                            index === focusedIndex && "ring-2 ring-inset ring-blue-500 bg-blue-50"
                        )}
                    >
                        {loc}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
};

const Search = {
    OuterWrapper,
    InnerWrapper,
    Button,
    Menu,
    MenuItem,
    LocationSelector,
};

export default Search;