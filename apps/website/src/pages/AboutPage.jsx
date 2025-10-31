import { useEffect } from "react";
import { setPageMeta } from "@website/utils/setPageMeta";

const AboutPage = () => {

    useEffect(() => {
        setPageMeta({
            title: "About",
            description: "About page Uverest website template."
        });
    }, []);

    return (
        <>About page content</>
    )
}

export default AboutPage;