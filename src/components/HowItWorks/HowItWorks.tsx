import { processSteps } from "@/lib/processSteps";
import ProcessStep from "./ProcessStep";
import ProcessSteps from "./ProcessSteps";
import { ProcessStepLibProps } from "@/types/lib/processStep";

const HowItWorks = () => {
    return (
        <div>
            <h2 className="text-center">How it Works</h2>
            <ProcessSteps>
                {
                    processSteps.map((processStep: ProcessStepLibProps) => (
                        <ProcessStep
                            key={processStep.id}
                            iconSrc={processStep.iconSrc}
                            label={processStep.label}
                            description={processStep.description}
                            size={processStep.size}
                        />
                    ))
                }
            </ProcessSteps>
        </div>
    )
}

export default HowItWorks;