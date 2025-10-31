import { Box } from "@mui/material";

const HeroVideo = ({ videoPath, height = "100dvh", sx, children, ...rest }) => {
    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                height: height,
                overflow: 'hidden',
                py: { xs: 2, md: 0, },
                ...sx
            }}
            {...rest}
        >
            <Box
                component="video"
                src={videoPath}
                autoPlay
                loop
                muted
                playsInline
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    minWidth: '100%',
                    minHeight: '100%',
                    objectFit: 'cover',
                    zIndex: 0,
                }}
            />
            {children}
        </Box>
    )
}

export default HeroVideo;