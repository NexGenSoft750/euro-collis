import { Logo } from "@/components/ui";

const FooterLogo: React.FC = () => {
    return (
        <Logo
            src="footer-logo.svg"
            alt="Brand Footer Logo"
            width={50}
            height={50}
            className="mb-6"
        />
    );
};

export default FooterLogo;