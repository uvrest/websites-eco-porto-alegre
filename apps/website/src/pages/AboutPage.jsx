import { useEffect } from "react";
import { setPageMeta } from "@website/utils/setPageMeta";
import PageHeader from "@website/layout/PageHeader";
import AboutSection from "@website/sections/AboutSection";
import ValuesSection from "@website/sections/ValuesSection";

const AboutPage = () => {

    useEffect(() => {
        setPageMeta({
            title: "Sobre a Eco Porto Alegre",
            description: "Saiba mais sobre a Eco Porto Alegre - Desentupidora e Caça Vazamentos."
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