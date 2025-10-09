import clsx from "clsx";
import React, { HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    className?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = '', ...props }) => {
    return (
        <section className={clsx("px-6 md:px-16 lg:px-32", className)}
            {...props}> {children}
        </section >
    );
};

export default Section;
