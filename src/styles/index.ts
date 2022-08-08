import {createStitches, ScaleValue} from "@stitches/react";
import {colorsSystem} from "../Colors/colors";

export const {styled, globalCss, css} = createStitches({
    theme: {
        colors: {
            ...colorsSystem,
        },
        space: {
            px: '1px',
            1: '0.25rem',
            2: '0.5rem',
            3: '0.75rem',
            4: '1rem',
            5: '1.25rem',
            6: '1.5rem',
            7: '1.75rem',
            8: '2rem',
            10: '2.5rem',
            12: '3rem',
            16: '4rem',
            20: '5rem',
            40: '10rem',
            64: '16rem',
            80: '20rem',
        },
        radii: {
            default: '5px',
            pill: '9999px',
            topBorder: '5px 5px 0 0',
            bottomBorder: '0 0 5px 5px',
        },
        fonts: {
            default: "Roboto",
            highlight: "Roboto",
        },
        fontWeights: {
            default: 300,
            regular: 400,
            bold: 700
        },
        lineHeights: {
            default: "100%",
            shorter: "120%",
            short: "140%",
            tall: "160%",
            taller: "180%",
        },
        borderWidths: {
            thin: '1px',
            mid: '2px',
            thick: '4px'
        },
        letterSpacings: {
            default: 0,
            "1": "0.25rem",
            "2": "0.5rem",
            "3": "0.75rem",
            "4": "1rem",
            "5": "1.25rem",
            "6": "1.5rem",
            "8": "2rem",
            "10": "2.5rem",
            "12": "3rem",
            "16": "4rem",
            "20": "5rem",
            "40": "10rem",
        },
        fontSizes: {
            'xs': '0.75rem',
            'sm': '0.875rem',
            'md': '1rem',
            "lg": "1.25rem",
            "xl": "1.5rem",
            "2xl": "2rem",
            "3xl": "3rem",
            "4xl": "4rem",
        },
        sizes: {
            'xs': '0.75rem',
            'sm': '0.875rem',
            'md': '1rem',
            "lg": "1.25rem",
            "xl": "1.5rem",
            "2xl": "2rem",
            "3xl": "3rem",
            "4xl": "4rem",
            'full': '100%',
        },
        zIndices: {
            overlay: 9995,
            modal: 9999,
        }
    },

    utils: {
        paddingX: (value: ScaleValue<'space'>) => ({
            paddingTop: value,
            paddingBottom: value,
        }),
        paddingY: (value: ScaleValue<'space'>) => ({
            paddingLeft: value,
            paddingRight: value,
        }),
    },
})
