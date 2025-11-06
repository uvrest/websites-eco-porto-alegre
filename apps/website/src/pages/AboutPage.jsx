import { useEffect } from "react";
import { setPageMeta } from "@website/utils/setPageMeta";
import PageHeader from "@website/layout/PageHeader";
import AboutSection from "@website/sections/AboutSection";
import ValuesSection from "@website/sections/ValuesSection";

const AboutPage = () => {

    useEffect(() => {
        setPageMeta({
            title: "About",
            description: "About page Uverest website template."
        });
    }, []);

    return (
        <>
            <PageHeader pageTitle="Sobre nós" overline="Saiba mais sobre a Eco Porto Alegre" />
            <AboutSection />
            <ValuesSection />
        </>
    )
}

export default AboutPage;