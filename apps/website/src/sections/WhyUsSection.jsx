import { Box } from "@mui/material";
import HalfBleedSplitWrapper from "@uverest/design-system/layout/wrappers/HalfBleedSplitWrapper";
import SectionTitle from "@website/components/ui/SectionTitle";
import BenefitsList from "@website/components/BenefitsList";

const title = "Na Uverest você está seguro";
const overline = "5 Motivos para trazer o seu meio digital para a Uverest";

const benefits = [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "When an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    "And more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
];

const WhyUsSection = () => {
    return (
        <Box id="motivos" sx={{ backgroundColor: "background.paper" }}>
            <HalfBleedSplitWrapper
                backgroundImage="./placeholders/650x450.jpg"
                overlay={null}
                minHeight="70vh"
                contentAlign="center"
                bleedPercentage={49.5}
            >
                <Box py={5}>
                    <SectionTitle
                        title={title}
                        subtitle={overline}
                        align="left"
                        variant="h3"
                    />

                    <BenefitsList items={benefits} footer={null} />
                </Box>
            </HalfBleedSplitWrapper>
        </Box>
    )
}

export default WhyUsSection;