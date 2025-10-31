/* /packages/config/vite.optimize.config.js */
export const optimizeDeps = {
    include: [
        // MUI core
        '@mui/material',
        '@mui/icons-material',
        '@emotion/react',
        '@emotion/styled',

        // Swiper
        'swiper',
        'swiper/react',
        'swiper/modules',

        // Form & validation
        'react-hook-form',
        'yup',

        // State & data fetching
        'zustand',
        'swr',

        // Charts
        'recharts',

        // Utils
        'date-fns',
        'axios'
    ],
}