type FilterIconProps = {
    size?: number;
    color?: string;
    className?: string;
};

export default function FilterIcon({
    size = 20,
    color = "currentColor",
    className,
}: FilterIconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill="none"
            stroke={color}
            strokeWidth={1.75}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className={className}
        >
            <line x1="4" y1="6" x2="20" y2="6" />
            <circle cx="9" cy="6" r="2" fill={color} />

            <line x1="4" y1="12" x2="20" y2="12" />
            <circle cx="15" cy="12" r="2" fill={color} />

            <line x1="4" y1="18" x2="20" y2="18" />
            <circle cx="11" cy="18" r="2" fill={color} />
        </svg>
    );
}
