import { useEffect } from "react";
import { setPageMeta } from "@website/utils/setPageMeta";
import HeroSection from "@website/sections/HeroSection";
import FeaturesSection from "@website/sections/FeaturesSection";
import AboutSection from "@website/sections/AboutSection";
import ConsultationOptionsSection from "@website/sections/ConsultationOptionsSection";
import CtaSection from "@website/sections/CtaSection";
import ServicesSection from "@website/sections/ServicesSection";
import ProcessSection from "@website/sections/ProcessSection";
import WhyUsSection from "@website/sections/WhyUsSection";
import FaqSection from "@website/sections/FaqSection";

const HomePage = () => {

    useEffect(() => {
        setPageMeta({
            title: "Home",
            description: "Homepage Uverest website template."
        });
    }, []);

    return (
        <>
            <HeroSection />
            <FeaturesSection />
            <AboutSection />
            <ConsultationOptionsSection />
            <CtaSection />
            <ServicesSection />
            <ProcessSection />
            <WhyUsSection />
            <FaqSection />
        </>
    )
}

export default HomePage;