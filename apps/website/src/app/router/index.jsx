import { Routes, Route } from "react-router";
import DefaultLayout from "@website/layout/DefaulLayout";
import HomePage from "@website/pages/HomePage";
import AboutPage from "@website/pages/AboutPage";
import ServicesPage from "@website/pages/ServicesPage";
import ContactPage from "@website/pages/ContactPage";
import NotFoundPage from "@website/pages/NotFoundPage";
import CacaVazamentoPage from "@website/pages/CacaVazamentoPage";
import EncanadorPage from "@website/pages/EncanadorPage";
import DesentupimentoPage from "@website/pages/DesentupimentoPage";
import LimpaFossaPage from "@website/pages/LimpaFossaPage";
import HidrojateamentoPage from "@website/pages/HidrojateamentoPage";
import DedetizacaoPage from "@website/pages/DedetizacaoPage";

export const AppRouter = () => {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route index element={<HomePage />} />
                <Route path="sobre" element={<AboutPage />} />
                <Route path="servicos">
                    <Route index element={<ServicesPage />} />
                    <Route path="caca-vazamento" element={<CacaVazamentoPage />} />
                    <Route path="encanador" element={<EncanadorPage />} />
                    <Route path="desentupimentos" element={<DesentupimentoPage />} />
                    <Route path="limpa-fossa" element={<LimpaFossaPage />} />
                    <Route path="hidrojateamento" element={<HidrojateamentoPage />} />
                    <Route path="dedetizacao" element={<DedetizacaoPage />} />
                </Route>
                <Route path="contato" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
}