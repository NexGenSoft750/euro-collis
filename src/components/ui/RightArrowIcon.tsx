import React from 'react';

interface RightArrowIconProps {
    className?: string;
    size?: number;
    strokeWidth?: number;
    color?: string;
}

const RightArrowIcon = ({ className, size = 24, strokeWidth = 2, color = "currentColor", ...props }: RightArrowIconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            {...props}
        >
            <path d="M5 12h17"></path>
            <path d="m15 5 7 7-7 7"></path>
        </svg>
    );
};

export default RightArrowIcon;