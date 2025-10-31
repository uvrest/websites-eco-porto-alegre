import { Routes, Route } from "react-router";
import DefaultLayout from "@website/layout/DefaulLayout";
import HomePage from "@website/pages/HomePage";
import AboutPage from "@website/pages/AboutPage";
import ServicesPage from "@website/pages/ServicesPage";
import ContactPage from "@website/pages/ContactPage";
import NotFoundPage from "@website/pages/NotFoundPage";

export const AppRouter = () => {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route index element={<HomePage />} />
                <Route path="sobre" element={<AboutPage />} />
                <Route path="servicos" element={<ServicesPage />} />
                <Route path="contato" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
}