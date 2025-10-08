import { whyEuroCollisCardProps } from "@/types";
import clsx from "clsx";

const WhyEuroCollisCard = ({ headerBgColor, label, description }: whyEuroCollisCardProps) => {
    const headerBgColors = {
        yellow: "bg-yellow",
        primary: "bg-primary",
        secondary: "bg-secondary",
    };

    return (
        <div>
            <div
                className={
                    clsx(
                        "h-3 rounded-t-lg",
                        headerBgColors[headerBgColor],
                    )
                }
            >
            </div>
            <div className="bg-white rounded-b-lg px-8 py-10">
                <h4 className="mb-6">{label}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default WhyEuroCollisCard;