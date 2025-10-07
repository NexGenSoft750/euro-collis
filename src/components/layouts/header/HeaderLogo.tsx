import { Logo } from "@/components/ui";

const HeaderLogo: React.FC = () => {
    return (
        <Logo
            src="logo.svg"
            alt="Brand Logo"
            width={170}
            height={170}
        />
    );
};

export default HeaderLogo;