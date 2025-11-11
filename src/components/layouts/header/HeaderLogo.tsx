import { Logo } from "@/components/ui";
import Link from "next/link";

const HeaderLogo: React.FC = () => {
    return (
        <Link href="/">
            <Logo
                src="logo.svg"
                alt="Brand Logo"
                width={170}
                height={170}
            />
        </Link>
    );
};

export default HeaderLogo;