import { debounce } from "@uverest/utils/lodash";
import { useState, useLayoutEffect, useRef } from "react";
import { Box, Container, useMediaQuery, useTheme } from "@mui/material";

const HalfBleedSplitWrapper = ({
    backgroundImage = null,
    backgroundSize = "cover",
    backgroundColor = "primary.main",
    bleedPosition = "left",
    bleedPercentage = 50, // number or { xs, sm, md, lg, xl }
    minHeight = "400px",
    minMobileHeight = "50vh",
    containerMaxWidth = "lg",
    contentAlign = "start",
    gap = 0,
    overlay = null,  // null | "dark" | "light" | { color, opacity }
    sx = {},
    children,
}) => {

    const containerRef = useRef(null);
    const [offset, setOffset] = useState(0);

    const theme = useTheme();
    const upMd = useMediaQuery(theme.breakpoints.up("md"));
    const upLg = useMediaQuery(theme.breakpoints.up("lg"));
    const upXl = useMediaQuery(theme.breakpoints.up("xl"));

    const minPercentageWidth = 20;
    const maxPercentageWidth = 80;
    const isRight = bleedPosition === "right";

    // resolve bleed com responsividade
    const resolveBleed = () => {
        if (typeof bleedPercentage === "number") return bleedPercentage;

        if (typeof bleedPercentage === "object") {
            if (upXl && bleedPercentage.xl) return bleedPercentage.xl;
            if (upLg && bleedPercentage.lg) return bleedPercentage.lg;
            if (upMd && bleedPercentage.md) return bleedPercentage.md;
            if (bleedPercentage.sm) return bleedPercentage.sm;
            if (bleedPercentage.xs) return bleedPercentage.xs;
        }

        return 50; // fallback
    };

    const bleedResolvedPercentage = Math.max(
        minPercentageWidth,
        Math.min(Number(resolveBleed()) || 50, maxPercentageWidth)
    );

    // calcular offset
    useLayoutEffect(() => {
        const handleResize = debounce(() => {
            if (!containerRef.current) return;

            const vw = window.innerWidth;
            const containerWidth = containerRef.current.offsetWidth;

            const calc = Math.max(
                0,
                (vw * bleedResolvedPercentage) / 100 - (vw - containerWidth) / 2
            );

            setOffset(calc);
        }, 150);

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [bleedResolvedPercentage]);

    // resolve overlay color
    const resolveOverlayColor = () => {
        if (!overlay) return null;

        if (overlay === "dark") return "rgba(0,0,0,0.45)";
        if (overlay === "light") return "rgba(255,255,255,0.45)";
        if (typeof overlay === "object") {
            return overlay.color || "rgba(0,0,0,0.45)";
        }

        return null;
    };

    const overlayOpacity = Boolean(overlay && typeof overlay === "object" && overlay.opacity !== undefined) ? overlay.opacity : 1;

    return (
        <Box
            className="half-bleed-split"
            sx={{
                position: "relative",
                width: "100%",
                minHeight: minHeight,
                ...sx,
            }}
        >

            {/* Bled Section */}
            <Box
                aria-hidden
                sx={{
                    position: { xs: "relative", md: "absolute" },
                    inset: { md: 0 },
                    left: { md: isRight ? "auto" : 0 },
                    right: { md: isRight ? 0 : "auto" },
                    height: { xs: minMobileHeight, md: "100%" },
                    width: {
                        xs: "100%",
                        md: `calc(100vw * ${bleedResolvedPercentage} / 100)`,
                    },
                    backgroundColor: backgroundColor,
                    backgroundImage: !!backgroundImage && `url(${backgroundImage})`,
                    backgroundSize: backgroundSize,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    borderRadius: { xs: 0, md: isRight ? "0 0 0 24px" : "0 24px 0 0" },
                    overflow: "hidden",
                }}
            >
                {/* Overlay */}
                {overlay && (
                    <Box
                        sx={{
                            position: "absolute",
                            inset: 0,
                            backgroundColor: resolveOverlayColor(),
                            opacity: overlayOpacity,
                        }}
                    />
                )}
            </Box>

            {/* Contained Content */}
            <Container
                ref={containerRef}
                className="half-bleed-split-container"
                maxWidth={containerMaxWidth}
                sx={{
                    position: "relative",
                    zIndex: 1,
                    minHeight: { xs: "auto", md: typeof minHeight === "number" ? `${minHeight}px` : minHeight },
                    display: "flex",
                    alignItems: contentAlign === "start" ? "flex-start" : contentAlign === "end" ? "flex-end" : "center",
                }}
            >

                {/* Spacer */}
                <Box
                    sx={{
                        display: { xs: "none", md: "block" },
                        width: `${offset}px`,
                        order: isRight ? 1 : 0,
                        flex: "0 0 auto",
                    }}
                />

                {/* Children */}
                <Box
                    sx={{
                        order: isRight ? 0 : 1,
                        flex: 1,
                        px: { xs: 0, md: gap },
                    }}
                >
                    {children}
                </Box>

            </Container>

        </Box>
    )
}

export default HalfBleedSplitWrapper;