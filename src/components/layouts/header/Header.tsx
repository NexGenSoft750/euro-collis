import styles from "@/styles/layouts/Header.module.scss";
import Nav from "./Nav";
import { Button, Logo } from "@/components/ui";
import HeaderLogo from "./HeaderLogo";

const Header: React.FC = () => {
    return (
        <header className="flex justify-between items-center px-16 gap-10">
            <HeaderLogo />
            <Nav />
            <Button
                variant="outline"
                size="xl"
                rounded="2xl"
                className="text-sm font-semibold"
            >
                Login/SignUp
            </Button>
        </header>
    )
}

export default Header;