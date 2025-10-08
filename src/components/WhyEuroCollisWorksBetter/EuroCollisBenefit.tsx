import { EuroCollisBenefitProps } from "@/types";
import { Icon } from "../ui";

const EuroCollisBenefit = ({ iconSrc, label, description }: EuroCollisBenefitProps) => {
    return (
        <div className="bg-white rounded-lg border border-solid border-[#f0eaea] px-16 py-12">
            <div className="flex items-center gap-4 mb-3">
                <Icon
                    src={`/images/euro-collis-benefit/${iconSrc}`}
                    alt={`${label} Icon`}
                    width={55}
                    height={55}
                />
                <h6>{label}</h6>
            </div>
            <p className="text-light-grey">{description}</p>
        </div>
    );
}

export default EuroCollisBenefit;