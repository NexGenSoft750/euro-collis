"use client";

import Nav from "./Nav";
import { Button } from "@/components/ui";
import HeaderLogo from "./HeaderLogo";
import { useState } from "react";
import MobileNav from "./MobileNav";
import Image from "next/image";
import { useAuthContext } from "@/components/AuthProvider"; // Import useAuthContext
import { useRouter } from "next/navigation"; // Import useRouter

const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const { user, logout } = useAuthContext(); // Use auth context
    const router = useRouter(); // Initialize useRouter
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="h-20 flex justify-between items-center px-6 md:px-16 xl:gap-10">
            <HeaderLogo />
            <Nav />
            <MobileNav isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
            {!user && (
              <Button
                  variant="outline"
                  size="lg"
                  rounded="xl"
                  className="text-sm font-semibold hidden lg:block"
                  onClick={() => router.push('/login')}
              >
                  Login/Signup
              </Button>
            )}
            {user && (
              <Button
                  variant="outline"
                  size="lg"
                  rounded="xl"
                  className="text-sm font-semibold hidden lg:block ml-2"
                  onClick={() => router.push('/portal/profile')}
              >
                  Profile
              </Button>
            )}
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