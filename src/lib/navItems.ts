import { NavItemLibProps } from "@/types/lib";

export const navItems: NavItemLibProps[] = [
    {
        id: 1,
        label: "Home",
        href: "/",
        iconSrc: "/images/nav-icons/home-icon.svg",
    },
    {
        id: 2,
        label: "For Couriers",
        href: "/for-couriers",
        iconSrc: "/images/nav-icons/truck-icon.svg",
    },
    {
        id: 3,
        label: "My Bookings",
        href: "/portal",
        iconSrc: "/images/common/user-icon.png",
    },
    {
        id: 4,
        label: "About Us",
        href: "/about-us",
        iconSrc: "/images/nav-icons/info-icon.svg",
    },
    {
        id: 5,
        label: "Contact Us",
        href: "/contact-us",
        iconSrc: "/images/nav-icons/contact-icon.svg",
    },
];