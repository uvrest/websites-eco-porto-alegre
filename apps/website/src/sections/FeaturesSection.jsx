import { Box } from "@mui/material";
import Features from "@website/components/Features";
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import CampaignRoundedIcon from '@mui/icons-material/CampaignRounded';
import LocalDiningRoundedIcon from '@mui/icons-material/LocalDiningRounded';
import SpaRoundedIcon from '@mui/icons-material/SpaRounded';

const FeaturesSection = () => {

    const features = [
        { id: 1, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", Icon: WorkspacePremiumOutlinedIcon },
        { id: 2, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", Icon: CampaignRoundedIcon },
        { id: 3, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", Icon: LocalDiningRoundedIcon },
    ];

    return (
        <Box component="section" id="features">
            <Features items={features} />
        </Box>
    )
}

export default FeaturesSection;