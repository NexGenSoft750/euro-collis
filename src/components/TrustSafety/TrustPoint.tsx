import { TrustPointProps } from "@/types";
import { Icon } from "@/components/ui";

const TrustPoint = ({ iconSrc, label, description }: TrustPointProps) => {
    return (
        <div className="flex items-center gap-4">
            <Icon
                src={`/images/trust-safety/${iconSrc}`}
                alt={`${label} Icon`}
                width={55}
                height={55}

            />
            <div className="flex flex-col justify-between h-full">
                <h6 className="text-base">{label}</h6>
                <p className="text-light-grey text-sm">{description}</p>
            </div>
        </div>
    );
};

export default TrustPoint;