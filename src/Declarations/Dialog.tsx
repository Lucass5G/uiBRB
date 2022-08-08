import {keyframes,} from "@stitches/react";
import {css} from "../styles";

export const overlayShowKF = keyframes({
    '0%': {opacity: 0},
    '100%': {opacity: 1},
});

export const contentShowKF = keyframes({
    '0%': {opacity: 0, transform: 'translate(-50%, -48%) scale(.96)'},
    '100%': {opacity: 1, transform: 'translate(-50%, -50%) scale(1)'},
});

export const DialogOverlayCSS = css({
    backgroundColor: '$overlayB9',
    position: 'fixed',
    inset: 0,
    '@media (prefers-reduced-motion: no-preference)': {
        animation: `${overlayShowKF} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
    },
});

export const DialogContentCSS = css({
    backgroundColor: 'white',
    borderRadius: 6,
    boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90vw',
    maxWidth: '500px',
    maxHeight: '85vh',
    padding: 25,
    '@media (prefers-reduced-motion: no-preference)': {
        animation: `${contentShowKF} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
    },
    '&:focus': {outline: 'none'},
});

export const DialogTitleCSS = css({
    margin: 0,
    color: '$primary-dark',
    fontSize: '$lg',
    fontWeight: '$default',
});

export const DialogDescriptionCSS = css({
    marginBottom: 20,
    color: '$primary-dark',
    fontSize: '$md',
    lineHeight: '$tall',
});
