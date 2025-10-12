import React, { forwardRef } from 'react';
import clsx from 'clsx';

interface SearchWrapper extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}
const SearchWrapper = forwardRef<HTMLDivElement, SearchWrapper>(
    ({ children, className, ...props }, ref) => {
        return (
            <div
                className={clsx("px-3 py-2", className)}
                ref={ref}
                {...props}
            >
                {children}
            </div>
        );
    }
);

SearchWrapper.displayName = 'SearchWrapper';

export { SearchWrapper };