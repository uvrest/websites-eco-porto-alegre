const components = {
    MuiButton: {
        styleOverrides: {
            root: ({ theme }) => ({
                borderRadius: theme.shape.borderRadius,
                transition: theme.transitions.create(
                    ['background-color', 'box-shadow', 'transform'],
                    { duration: theme.transitions.duration.short }
                ),
                '&:active': { transform: 'translateY(1px)' },
            }),
        },
    },
    MuiCard: {
        styleOverrides: {
            root: ({ theme }) => ({
                borderRadius: theme.shape.borderRadiusLg,
                transition: theme.transitions.create('box-shadow'),
            }),
        },
    },
    MuiTooltip: {
        styleOverrides: {
            tooltip: ({ theme }) => ({
                borderRadius: theme.shape.borderRadiusSm,
            }),
        },
    },
};

export default components;