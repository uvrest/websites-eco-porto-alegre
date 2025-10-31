import { Outlet } from "react-router";
import { Box } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import WhatsappFloatingButton from "@website/components/WhatsappFloatingButton";

const DefaultLayout = () => {
    return (
        <Box minHeight="100dvh" display="flex" flexDirection="column">
            <Box component="header">
                <Header />
            </Box>
            <Box component="main">
                <Outlet />
            </Box>
            <Box component="footer">
                <Footer />
            </Box>
            <WhatsappFloatingButton />
        </Box>
    );
}

export default DefaultLayout;