import { ProcessStepProps } from "@/types";
import { Icon } from "../ui";

const ProcessStep = ({ iconSrc, label, description, size }: ProcessStepProps) => {
    return (
        <div className="flex flex-col justify-center items-center gap-3">
            <Icon
                src={`/images/how-it-works/${iconSrc}`}
                alt={`${label} Icon`}
                width={size}
                height={size}
            />
            <h4 className="text-center">{label}</h4>
            <p className="text-center">{description}</p>
        </div>
    )
}

export default ProcessStep;