import { trustPoints } from "@/lib/trustPoints";
import TrustPoint from "./TrustPoint";
import TrustPoints from "./TrustPoints";
import { TrustPointLibProps } from "@/types/lib";

const TrustSafety = () => {
    return (
        <div>
            <h1 className="mb-4 text-center sm:text-left">Your Safety, Our Priority</h1>
            <p className="mb-10 text-lg text-center sm:text-left">Every delivery is backed by verified couriers and platform
                protections.</p>
            <TrustPoints>
                {
                    trustPoints.map((trustPoint: TrustPointLibProps) => (
                        <TrustPoint
                            key={trustPoint.id}
                            iconSrc={trustPoint.iconSrc}
                            label={trustPoint.label}
                            description={trustPoint.description}
                        />
                    ))
                }
            </TrustPoints>
        </div>
    );
}

export default TrustSafety;