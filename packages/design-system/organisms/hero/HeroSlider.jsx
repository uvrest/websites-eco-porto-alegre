import { useEffect } from "react";
import {
    alpha,
    Box,
    Container,
    Stack,
    Typography,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    Autoplay,
    Navigation,
    Pagination,
    EffectFade,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import CtaButton from "@uverest/design-system/atoms/CtaButton";

/**
 * HeroSlider
 * 
 * @param {Object[]} slides - Array de slides
 * @param {number} [autoplay=5500] - Delay em ms para troca automática
 * @param {boolean} [loop=true] - Se deve rodar em loop
 * @param {boolean} [showNav=true] - Mostrar setas
 * @param {boolean} [showPagination=true] - Mostrar bullets
 */
const HeroSlider = ({
    slides = [],
    autoplay = 5500,
    loop = true,
    showNav = true,
    showPagination = true,
}) => {

    // Pré-carrega imagens pra evitar flicker no fade
    useEffect(() => {
        slides.forEach((s) => {
            const i = new Image();
            i.src = s.img;
        });
    }, [slides]);

    return (
        <Box
            sx={(theme) => ({
                position: "relative",
                height: { xs: "95vh", md: "90vh" },
                overflow: "hidden",
                "& .swiper": { height: "100%" },
                "& .swiper-slide": { position: "relative" },
                "& .swiper-button-next, & .swiper-button-prev": {
                    zIndex: 5,
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: 52,
                    height: 52,
                    color: theme.palette.background.paper,
                    textShadow: "0 1px 2px rgba(0,0,0,.45)",
                    "&:after": { fontSize: 22 },
                    transition: "transform .15s ease",
                    "&:hover": { transform: "translateY(-50%) scale(1.06)" },
                    "&:focus-visible": {
                        outline: "none",
                        boxShadow: `0 0 0 3px ${theme.palette.primary.main}55`,
                    },
                },
                "& .swiper-button-prev": { left: { xs: -10, md: 32 } },
                "& .swiper-button-next": { right: { xs: -10, md: 32 } },
                "& .swiper-pagination": { bottom: 32 },
                "& .swiper-pagination-bullet": {
                    width: 15,
                    height: 15,
                    opacity: 0.7,
                    background: alpha(theme.palette.common.white, 0.9),
                },
                "& .swiper-pagination-bullet-active": {
                    opacity: 1,
                    background: theme.palette.secondary.main,
                },
            })}
        >
            <Swiper
                modules={[Autoplay, Navigation, Pagination, EffectFade]}
                slidesPerView={1}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                speed={900}
                autoplay={
                    autoplay
                        ? {
                            delay: autoplay,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }
                        : false
                }
                navigation={showNav}
                pagination={showPagination ? { clickable: true } : false}
                loop={loop}
            >
                {slides.map((s) => (
                    <SwiperSlide key={s.id}>

                        {/* imagem de fundo */}
                        <Box
                            component="img"
                            src={s.img}
                            alt={s.title.text}
                            draggable={false}
                            sx={{
                                position: "absolute",
                                inset: 0,
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                transform: "scale(1.02)",
                                zIndex: 0,
                                transition: "transform 6s ease",
                                ".swiper-slide-active &": { transform: "scale(1.1)" },
                            }}
                        />

                        {/* overlay */}
                        {s.overlay && (
                            <Box
                                sx={{
                                    position: 'absolute',
                                    inset: 0,
                                    zIndex: 1,
                                    backgroundColor: s.overlay.color === 'dark'
                                        ? `rgba(0,0,0,${s.overlay.opacity})`
                                        : `rgba(255,255,255,${s.overlay.opacity})`,
                                }}
                            />
                        )}

                        {/* conteúdo */}
                        <Container
                            maxWidth="xl"
                            sx={{
                                display: 'flex',
                                position: "relative",
                                height: "100%",
                                zIndex: 2,
                                alignItems: 'center',
                            }}>

                            <Box
                                sx={{
                                    width: { xs: "100%", lg: "70%" },
                                    opacity: 0,
                                    transition: "all .6s ease",
                                    transform: "translateY(100px)",
                                    ".swiper-slide-active &": { transform: "translateY(0)", opacity: 1 },
                                    px: { xs: 2.5, sm: 4, md: 5 },
                                    py: { xs: 3, sm: 4.5, md: 6 },
                                }}
                            >
                                <Box>
                                    <Typography
                                        variant="overline"
                                        sx={{
                                            display: 'inline-block',
                                            marginBottom: 1,
                                            color: s.headLine.color,
                                            lineHeight: { xs: "inherit", md: "inherit" }
                                        }}
                                    >
                                        {s.headLine.text}
                                    </Typography>

                                    <Typography
                                        variant="h2"
                                        sx={{
                                            color: s.title.color,
                                            mb: 2,
                                            letterSpacing: { xs: "-0.01em", md: "-0.02em" },
                                            lineHeight: 1.05,
                                            fontWeight: 600,
                                            fontSize: { xs: "2rem", md: "3rem" },
                                        }}
                                    >
                                        {s.title.text}
                                    </Typography>

                                    <Typography variant="body1" sx={{ color: s.description.color, mb: 2 }}>
                                        {s.description.text}
                                    </Typography>

                                    <Stack direction="row" spacing={2}>
                                        {s.ctaPrimary && (
                                            <CtaButton
                                                label={s.ctaPrimary.label}
                                                target="_blank"
                                                variant="contained"
                                                size="large"
                                                href={s.ctaPrimary.href}
                                            />
                                        )}
                                    </Stack>
                                </Box>
                            </Box>

                        </Container>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
}

export default HeroSlider;