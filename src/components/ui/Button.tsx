import React from "react";
import clsx from "clsx";
import styles from "./Button.module.scss";
import { ButtonProps } from "@/types/button";

const Button: React.FC<ButtonProps> = ({
    children,
    variant = "solid",
    size = "md",
    rounded = "md",
    className = "",
    onClick,
    ...props
}) => {
    const variants = {
        solid: styles.solid,
        outline: styles.outline,
        ghost: styles.ghost,
        link: styles.link,
    };

    const sizes = {
        sm: styles.sm,
        md: styles.md,
        lg: styles.lg,
        xl: styles.xl,
    };

    const roundedClasses = {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        '2xl': 'rounded-2xl',
        '3xl': 'rounded-3xl',
    };

    return (
        <button
            className={clsx(
                styles.button,
                variants[variant],
                sizes[size],
                roundedClasses[rounded],
                className /** className is also use for override any style.*/
            )}
            {...props}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
