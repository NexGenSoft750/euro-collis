import Image from "next/image";

const LOGO_PATH_PREFIX = "/images";

interface LogoProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
};

const Logo = ({
    src, alt, width = 100, height = 100, className = '',
}: LogoProps) => {
    return (
        <div className={className}>
            <Image
                src={`${LOGO_PATH_PREFIX}/${src}`}
                alt={alt}
                width={width}
                height={height}
            />
        </div>
    )
}

export default Logo;