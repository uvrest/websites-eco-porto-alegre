import { useEffect } from "react";
import { setPageMeta } from "@website/utils/setPageMeta";
import PageHeader from "@website/layout/PageHeader";
import ContactSection from "@website/sections/ContactSection";

const ContactPage = () => {

    useEffect(() => {
        setPageMeta({
            title: "Contato",
            description: "Entre em contato com a Eco Porto Alegre e agende uma visita técnica para solucionar problemas hidráulicos, desentupimentos e vazamentos."
        });
    }, []);

    return (
        <>
            <PageHeader pageTitle="Agende uma visita técnica" overline="Entre em contato conosco" />
            <ContactSection />
        </>
    )
}

export default ContactPage;