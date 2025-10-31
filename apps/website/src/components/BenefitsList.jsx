// apps/website/src/components/BenefitsList.jsx
import { Box, Stack, Typography } from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const BenefitItem = ({ text }) => (
    <Stack direction="row" alignItems="flex-start" spacing={1.5}>
        <CheckCircleRoundedIcon color="success" fontSize="small" />
        <Typography variant="body1">{text}</Typography>
    </Stack>
);

const BenefitsList = ({ items = [], footer = null }) => {
    return (
        <Box>
            <Stack spacing={1.5} mb={footer ? 3 : 0}>
                {items.map((text, idx) => (
                    <BenefitItem key={idx} text={text} />
                ))}
            </Stack>

            {footer && (
                <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", fontStyle: "italic" }}
                >
                    {footer}
                </Typography>
            )}
        </Box>
    );
};

export default BenefitsList;