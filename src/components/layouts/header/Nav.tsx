"use client";

import { navItems } from '@/lib/navItems';
import styles from './Nav.module.scss';
import Link from "next/link";
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { NavItemLibProps } from '@/types/lib';

const Nav: React.FC = () => {
    const currentPath = usePathname();

    return (
        <nav className={clsx(styles.nav, "flex-1 hidden lg:flex  justify-center")}>
            <ul className="flex items-center gap-8">
                {navItems.map((navItem: NavItemLibProps) => (
                    <li
                        key={navItem.id}
                        className={clsx(
                            styles.nav__navItem,
                            { [styles["nav__navItem--is-active"]]: currentPath === navItem.href }
                        )}
                    >
                        <Link href={navItem.href}>{navItem.label}</Link>
                    </li>
                ))}

            </ul>
        </nav>
    );
};

export default Nav;