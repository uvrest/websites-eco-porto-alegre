import { useEffect } from "react";
import { setPageMeta } from "@website/utils/setPageMeta";
import PageHeader from "@website/layout/PageHeader";
import ServicesSection from "@website/sections/ServicesSection";

const ServicesPage = () => {

    useEffect(() => {
        setPageMeta({
            title: "Nossos Serviços",
            description: "Veja as soluções em hidráulica, caça vazamentos, desentupimentos e muito mais que a Eco Porto Alegre lhe oferece."
        });
    }, []);

    return (
        <>
            <PageHeader pageTitle="Nossos Serviços" overline="Veja as soluções que a Eco Porto Alegre oferece" />
            <ServicesSection />
        </>
    )
}

export default ServicesPage;