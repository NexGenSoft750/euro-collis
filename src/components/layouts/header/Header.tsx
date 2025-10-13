"use client";

import styles from "@/styles/layouts/Header.module.scss";
import Nav from "./Nav";
import { Button, Logo } from "@/components/ui";
import HeaderLogo from "./HeaderLogo";
import Image from "next/image";
import { useState } from "react";
import MobileNav from "./MobileNav";

const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="h-20 flex justify-between items-center px-6 md:px-16 xl:gap-10">
            <HeaderLogo />
            <Nav />
            <MobileNav isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
            <Button
                variant="outline"
                size="xl"
                rounded="2xl"
                className="text-sm font-semibold hidden lg:block"
            >
                Login/SignUp
            </Button>
            <button onClick={toggleMobileMenu} className="block lg:hidden">
                <Image
                    src="/images/hamburger.svg"
                    alt="hamburger Icon"
                    width={40}
                    height={40}
                />
            </button>
        </header>
    )
}

export default Header;