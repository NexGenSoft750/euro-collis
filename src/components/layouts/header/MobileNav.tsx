"use client";

import { navItems } from '@/lib/navItems';
import styles from './MobileNav.module.scss';
import Link from "next/link";
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { NavItemLibProps } from '@/types/lib';
import { Button } from "@/components/ui";
import { Dispatch, SetStateAction } from 'react';

interface MobileNavProps {
    isMobileMenuOpen: boolean;
    setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const MobileNav: React.FC<MobileNavProps> = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
    const currentPath = usePathname();

    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={clsx(styles.mobileNav, {
            [styles["mobileNav--open"]]: isMobileMenuOpen,
        })}>
            <button onClick={handleLinkClick} className="absolute top-6 right-6 text-white text-3xl">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <ul className="flex flex-col items-start gap-8 w-full">
                {navItems.map((navItem: NavItemLibProps) => (
                    <li
                        key={navItem.id}
                        className={clsx(
                            styles.mobileNav__navItem,
                            { [styles["mobileNav__navItem--is-active"]]: currentPath === navItem.href }
                        )}
                    >
                        <Link href={navItem.href} onClick={handleLinkClick}>{navItem.label}</Link>
                    </li>
                ))}
            </ul>
            <div className="mt-4">
                <Button
                    variant="solid"
                    size="md"
                    rounded="xl"
                    className="text-sm font-semibold w-full"
                    onClick={handleLinkClick}
                >
                    Login/SignUp
                </Button>
            </div>
        </nav>
    );
};

export default MobileNav;
