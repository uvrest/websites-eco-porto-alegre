import { useEffect } from "react";
import { setPageMeta } from "@website/utils/setPageMeta";

const ContactPage = () => {

    useEffect(() => {
        setPageMeta({
            title: "Contact",
            description: "Contact page Uverest website template."
        });
    }, []);

    return (
        <>Contact page content</>
    )
}

export default ContactPage;