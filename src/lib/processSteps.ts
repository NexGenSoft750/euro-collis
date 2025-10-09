import { ProcessStepLibProps } from "@/types/lib/processStep";

export const processSteps: ProcessStepLibProps[] = [
    {
        id: 1,
        iconSrc: "search-compare.png",
        label: "Search & Compare",
        description: "Find shipping options and compare prices",
        size: 115,
    },
    {
        id: 2,
        iconSrc: "book-a-courier.png",
        label: "Book a Courier",
        description: "Schedule and confirm your delivery",
        size: 90,
    },
    {
        id: 3,
        iconSrc: "handoff-the-package.png",
        label: "Handoff the Package",
        description: "Bring your parcel to the pickup point",
        size: 120,
    },
    {
        id: 4,
        iconSrc: "track-or-communicate.png",
        label: "Track or Communicate",
        description: "Monitor shipments or contact support",
        size: 100,
    },
];