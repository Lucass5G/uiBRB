import {keyframes, } from "@stitches/react";
import {css} from "../styles";

const rotateKF = keyframes({
    '100%': {
        '-webkit-transform': 'rotate(360deg)',
        'transform': 'rotate(360deg)',
    }
})

const dashKF = keyframes({
    '0%': {
        'strokeDasharray': '1, 200',
        'strokeDashoffset': 0,
    },
    '50%': {
        'strokeDasharray': '89, 200',
        'strokeDashoffset': -35,
    },
    '100%': {
        'strokeDasharray': '89, 200',
        'strokeDashoffset': -124,
    }
})

const colorKF = keyframes({
    '100%, 0%': {
        'stroke': '$colors$primary-light',
    },
    '40%': {
        'stroke': '$colors$primary-mid',
    },
    '66%': {
        'stroke': '$colors$primary-dark',
    },
    '80%, 90%': {
        'stroke': '$colors$blue5',
    },
})

export const SpinnerCSS = css({
    position: 'relative',
    '&::before': {
        content: '""',
        display: 'block',
        paddingTop: '100%'
    },

    variants: {
        size: {
            sm: { width: '$md' },
            md: { width: '$lg' },
            lg: { width: '$xl' },
            xl: { width: '$2xl' },
        }
    },
    defaultVariants: {
        size: 'xl',
    }
})

export const CircularCSS = css({
    '-webkit-animation': `${rotateKF} 1.2s linear infinite`,
    'animation': `${rotateKF} 1.2s linear infinite`,

    height: '100%',

    '-webkit-transform-origin': 'center center',
    '-ms-transform-origin': 'center center',
    'transform-origin': 'center center',

    width: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    margin: 0,
})

export const CircleCSS = css({
    'stroke-dasharray': '1, 200',
    'stroke-dashoffset': 0,
    '-webkit-animation': `${dashKF} 1.5s ease-in-out infinite, ${colorKF} 1.5s ease-in-out infinite`,
    'animation': `${dashKF} 1.5s ease-in-out infinite, ${colorKF} 1.5s ease-in-out infinite`,
    'stroke-linecap': 'round',
})
