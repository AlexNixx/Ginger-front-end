import { useState, useEffect } from "react";

const useTabletDetect = () => {
    const [width, setWidth] = useState<number>(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [])

    const isTablet = width <= 768;

    return isTablet;
}

export { useTabletDetect };