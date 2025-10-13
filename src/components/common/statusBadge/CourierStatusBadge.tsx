import styles from "./CourierStatusBadge.module.scss";
import { Icon } from "@/components/ui";

interface Courier {
  name: string;
  status: "verified" | "insured";
}

interface Props {
  courier: Courier;
}

const CourierStatusBadge: React.FC<Props> = ({ courier }) => {
  const isVerified = courier.status === "verified";
  const iconSrc = isVerified
    ? "/images/common/verified-badge.png"
    : "/images/common/insured-badge.png";
  const altText = `${courier.name} ${courier.status}`;
  
  return (
    <div
    className={
        isVerified
        ? styles.courierStatusBadge__verifiedBadge
        : styles.courierStatusBadge__insuredBadge
    }
    >
        <Icon
            src={iconSrc}
            alt={altText}
            width={30}
            height={30}
        />
    </div>
  );
};

export default CourierStatusBadge;
