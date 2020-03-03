import { theme } from '@chakra-ui/core';

const colors = {
    ...theme.colors,
    ecp: {
        50: theme.colors.facebook['50'],
        100: theme.colors.facebook['100'],
        200: theme.colors.facebook['200'],
        300: theme.colors.facebook['300'],
        400: theme.colors.facebook['400'],
        500: theme.colors.facebook['500'],
        600: theme.colors.facebook['600'],
        700: theme.colors.facebook['700'],
        800: theme.colors.facebook['800'],
        900: theme.colors.facebook['900']
    }
};

const fonts = {
    ...theme.fonts,
    heading:
        'Menlo, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
};

export const customTheme = {
    ...theme,
    fonts,
    colors
};
