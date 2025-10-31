import FloatingButton from "@uverest/design-system/atoms/FloatingButton";
import { WhatsApp } from "@mui/icons-material";
import { whatsappLinkURL } from "@website/app/config/contactInfo";

const WhatsappFloatingButton = () => {
    return (
        <FloatingButton
            icon={<WhatsApp />}
            color="success"
            aria-label="Fale conosco no WhatsApp"
            onClick={() =>
                window.open(whatsappLinkURL, "_blank", "noopener,noreferrer")
            }
        />
    );
};

export default WhatsappFloatingButton;
