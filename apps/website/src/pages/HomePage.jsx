import { useEffect } from "react";
import { setPageMeta } from "@website/utils/setPageMeta";
import HeroSection from "@website/sections/HeroSection";
import FeaturesSection from "@website/sections/FeaturesSection";
import AboutSection from "@website/sections/AboutSection";
import CtaSection from "@website/sections/CtaSection";
import ServicesSection from "@website/sections/ServicesSection";
import WhyUsSection from "@website/sections/WhyUsSection";
import FaqSection from "@website/sections/FaqSection";

const HomePage = () => {

    useEffect(() => {
        setPageMeta({
            title: "Home",
            description: "."
        });
    }, []);

    return (
        <>
            <HeroSection />
            <FeaturesSection />
            <AboutSection />
            <WhyUsSection />
            <ServicesSection />
            <CtaSection />
            <FaqSection />
        </>
    )
}

export default HomePage;