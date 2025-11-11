import { Logo } from "@/components/ui";
import Link from "next/link";

const FooterLogo: React.FC = () => {
    return (
        <Link href="/">
            <Logo
                src="footer-logo.svg"
                alt="Brand Footer Logo"
                width={50}
                height={50}
                className="mb-6"
            />
        </Link>
    );
};

export default FooterLogo;