import { TrustPointLibProps } from "@/types/lib";

export const trustPoints: TrustPointLibProps[] = [
    {
        id: 1,
        iconSrc: "vetted-couriers.png",
        label: "Vetted transporters",
        description: "ID and trip verification required",
    },
    {
        id: 2,
        iconSrc: "resolve-issues.png",
        label: "Insured goods",
        description: "Insurance available on every delivery",
    },
    {
        id: 3,
        iconSrc: "verified-reviews.png",
        label: "Verified reviews",
        description: "Only from real customers with real bookings",
    },
    {
        id: 4,
        iconSrc: "private-secure.png",
        label: "Private & secure",
        description: "Your details are never sold or shared",
    },
];
