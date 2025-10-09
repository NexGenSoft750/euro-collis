import { whyEuroCollisCards } from "@/lib/whyEuroCollisCards";
import WhyEuroCollisCard from "./WhyEuroCollisCard";
import WhyEuroCollisCards from "./WhyEuroCollisCards";
import { whyEuroCollisCardLibProps } from "@/types/lib";

const WhyEuroCollis = () => {
    return (
        <div>
            <h2 className="text-center mb-14">Why Euro Collis?</h2>
            <WhyEuroCollisCards>
                {
                    whyEuroCollisCards.map((whyEuroCollisCard: whyEuroCollisCardLibProps) => (
                        <WhyEuroCollisCard
                            key={whyEuroCollisCard.id}
                            headerBgColor={whyEuroCollisCard.headerBgColor}
                            label={whyEuroCollisCard.label}
                            description={whyEuroCollisCard.description}
                        />
                    ))
                }
            </WhyEuroCollisCards>
        </div>
    );
}

export default WhyEuroCollis;