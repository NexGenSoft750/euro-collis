import { FaqsProps } from "@/types";

const Faqs: React.FC<FaqsProps> = ({ children, ...props }) => {
    return (
        <div
            {...props}
            className="mt-14 flex flex-col gap-3"
        >
            {children}
        </div>
    );
};

export default Faqs;