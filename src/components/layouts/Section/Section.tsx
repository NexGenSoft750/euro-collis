import clsx from "clsx";
import React, { HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    className?: string;
    withXPadding?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, className = '', withXPadding = true, ...props }) => {
    return (
        <section
            className={clsx(
                withXPadding && "px-6 md:px-16 lg:px-32",
                className
            )}
            {...props}
        >
            {children}
        </section>
    );
};

export default Section;
