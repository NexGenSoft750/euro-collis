import { ProcessStepLibProps } from "@/types/lib/processStep";

export const processSteps: ProcessStepLibProps[] = [
    {
        id: 1,
        iconSrc: "search-compare.png",
        label: "Ask for a quote",
        description: "Tell us what you want to send, from where, and to where — that's all we need to start.",
        size: 115,
    },
    {
        id: 2,
        iconSrc: "book-a-courier.png",
        label: "We find transporters heading that way",
        description: "Our system instantly matches you with trusted transporters already going that route.",
        size: 90,
    },
    {
        id: 3,
        iconSrc: "handoff-the-package.png",
        label: "You choose and confirm",
        description: "Review your options, choose what fits best, and confirm your booking.",
        size: 120,
    },
    {
        id: 4,
        iconSrc: "track-or-communicate.png",
        label: "Your package is delivered",
        description: "The transporter collects your box, and you can track it until it arrives safely.",
        size: 100,
    },
];
