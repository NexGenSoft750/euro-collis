import { ChevronIconProps } from "@/types";

const ChevronIcon = ({
    direction,
    className = '',
    size = 24
}: ChevronIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
    >
        <polyline
            points={direction === 'up' ? '6 15 12 9 18 15' : '6 9 12 15 18 9'}
        />
    </svg>
);

export default ChevronIcon;