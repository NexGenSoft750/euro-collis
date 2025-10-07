"use client";

import { navItems } from '@/lib/navItems';
import styles from './Nav.module.scss';
import Link from "next/link";
import { NavItem } from '@/types/navItem';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

const Nav: React.FC = () => {
    const currentPath = usePathname();

    return (
        <nav className={clsx(styles.nav, "flex", "justify-center", "flex-1")}>
            <ul className="flex items-center gap-8">
                {navItems.map((navItem: NavItem) => (
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