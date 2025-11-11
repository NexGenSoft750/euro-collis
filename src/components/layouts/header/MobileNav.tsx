"use client";

import { navItems } from '@/lib/navItems';
import styles from './MobileNav.module.scss';
import Link from "next/link";
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { NavItemLibProps } from '@/types/lib';
import { Button, Logo } from "@/components/ui";
import { Dispatch, SetStateAction } from 'react';
import { 
    FaHome, 
    FaTruck, 
    FaInfoCircle, 
    FaEnvelope,
    FaBox
} from "react-icons/fa";

interface MobileNavProps {
    isMobileMenuOpen: boolean;
    setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const MobileNav: React.FC<MobileNavProps> = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
    const currentPath = usePathname();

    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    // Map navigation items to their corresponding icons
    const getIconForNavItem = (label: string) => {
        switch (label) {
            case "Home":
                return <FaHome className={styles.mobileNav__icon} />;
            case "For Couriers":
                return <FaTruck className={styles.mobileNav__icon} />;
            case "My Bookings":
                return <FaBox className={styles.mobileNav__icon} />;
            case "About Us":
                return <FaInfoCircle className={styles.mobileNav__icon} />;
            case "Contact Us":
                return <FaEnvelope className={styles.mobileNav__icon} />;
            default:
                return null;
        }
    };

    return (
        <>
            {/* Background overlay */}
            <div 
                className={clsx(styles.mobileNav__overlay, {
                    [styles["mobileNav__overlay--open"]]: isMobileMenuOpen,
                })}
                onClick={handleLinkClick}
            />
            
            {/* Navigation panel */}
            <nav className={clsx(styles.mobileNav, {
                [styles["mobileNav--open"]]: isMobileMenuOpen,
            })}>
                {/* Header with Logo */}
                <div className={styles.mobileNav__header}>
                    <div className={styles.mobileNav__logoWrapper}>
                        <Logo
                            src="logo.svg"
                            alt="EuroCollis Logo"
                            width={100}
                            height={100}
                        />
                    </div>
                    <button 
                        onClick={handleLinkClick} 
                        className={styles.mobileNav__closeButton}
                        aria-label="Close menu"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Navigation Items */}
                <ul className={styles.mobileNav__list}>
                    {navItems.map((navItem: NavItemLibProps) => (
                        <li
                            key={navItem.id}
                            className={clsx(
                                styles.mobileNav__navItem,
                                { [styles["mobileNav__navItem--is-active"]]: currentPath === navItem.href }
                            )}
                        >
                            <Link href={navItem.href} onClick={handleLinkClick} className={styles.mobileNav__link}>
                                {getIconForNavItem(navItem.label)}
                                <span className={styles.mobileNav__label}>{navItem.label}</span>
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="16" 
                                    height="16" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                    className={styles.mobileNav__chevron}
                                >
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Login/SignUp Button */}
                <div className={styles.mobileNav__buttonContainer}>
                    <Link href="/login" onClick={handleLinkClick}>
                        <Button
                            variant="solid"
                            size="md"
                            rounded="xl"
                            className={styles.mobileNav__button}
                        >
                            Login / Sign Up
                        </Button>
                    </Link>
                </div>
            </nav>
        </>
    );
};

export default MobileNav;
