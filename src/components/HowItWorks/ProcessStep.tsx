import { ProcessStepProps } from "@/types";
import { Icon } from "../ui";
import styles from './ProcessStep.module.scss';
import clsx from 'clsx';

const ProcessStep = ({ iconSrc, label, description, size }: ProcessStepProps) => {
    return (
        <div className={clsx("flex flex-col justify-center items-center gap-3", styles.processStep)}>
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