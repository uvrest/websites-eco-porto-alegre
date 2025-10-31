import { useEffect } from "react";
import { setPageMeta } from "@website/utils/setPageMeta";

const ServicesPage = () => {

    useEffect(() => {
        setPageMeta({
            title: "Services",
            description: "Services page Uverest website template."
        });
    }, []);

    return (
        <>Services page content</>
    )
}

export default ServicesPage;