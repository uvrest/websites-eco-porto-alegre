import { useEffect } from "react";
import { setPageMeta } from "@website/utils/setPageMeta";

const NotFoundPage = () => {

    useEffect(() => {
        setPageMeta({
            title: "Not Found",
            description: "Not found page Uverest website template."
        });
    }, []);

    return (
        <>404 page content</>
    )
}

export default NotFoundPage;