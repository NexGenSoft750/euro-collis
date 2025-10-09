import { euroCollisBenefits } from "@/lib/euroCollisBenefits";
import EuroCollisBenefit from "./EuroCollisBenefit";
import EuroCollisBenefits from "./EuroCollisBenefits";
import { EuroCollisBenefitLibProps } from "@/types/lib";

const WhyEuroCollisWorksBetter = () => {
    return (
        <div>
            <h3 className="text-center mb-3">Why EuroCoIIis Works Better</h3>
            <p className="text-center mb-6">A smarter, simpler way to send between Morocco and Europe.</p>
            <EuroCollisBenefits>
                {
                    euroCollisBenefits.map((euroCollisBenefit: EuroCollisBenefitLibProps) => (
                        <EuroCollisBenefit
                            key={euroCollisBenefit.id}
                            iconSrc={euroCollisBenefit.iconSrc}
                            label={euroCollisBenefit.label}
                            description={euroCollisBenefit.description}
                        />
                    ))
                }
            </EuroCollisBenefits>
        </div>
    );
};

export default WhyEuroCollisWorksBetter;