import { useEffect, useState } from "react";

export function useMobile() {
    const [isMobileScreen, setIsMobileScreen] = useState<boolean>(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobileScreen(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);

        return () => {
            window.removeEventListener("resize", checkMobile);
        };
    }, []);

    return [
        isMobileScreen,
    ];
}