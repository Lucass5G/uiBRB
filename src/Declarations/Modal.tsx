import {scrollbarCSS} from './index'
import {keyframes} from "@stitches/react";
import {css} from "../styles";

const overlayShowKF = keyframes({
    '0%': {opacity: 0},
    '100%': {opacity: 1}
})

const overlayHideKF = keyframes({
    '0%': {opacity: 1},
    '100%': {opacity: 0}
})

const contentShowCSS = keyframes({
    '0%': {
        opacity: 0,
        transform: 'translate3d(-50%, calc(-50% + 20px), 0) scale(.96)'
    },
    '100%': { opacity: 1, transform: 'translate3d(-50%, -50%, 0) scale(1)' }
})

const contentHideCSS = keyframes({
    '0%': { opacity: 1, transform: 'translate3d(-50%, -50%, 0) scale(1)' },
    '100%': {
        opacity: 0,
        transform: 'translate3d(-50%, calc(-50% + 20px), 0) scale(.96)',
    },
});

export const ModalOverlayCSS = css({
    backgroundColor: 'rgba(0,0,0,.9)',
    position: 'fixed',
    inset: 0,
    zIndex: '$overlay',

    '&[data-state=open]': {
        animation: `${overlayShowKF} 0.2s ease-in`,
    },
    '&[data-state=closed]': {
        animation: `${overlayHideKF} 0.3s ease-in`,
    },
});

export const ModalWrapperCSS = css(scrollbarCSS, {
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    top: '50%',
    left: '50%',
    backfaceVisibility: 'hidden',
    transform: 'translate3d(-50%, -50%, 0)',
    width: '90vw',
    maxWidth: '$$maxWidth',
    background: '$color-background',
    maxHeight: '90vh',
    zIndex: '$modal',
    borderRadius: '$default',

    '&:focus': {
        outline: 'none',
    },

    '&[data-state=open]': {
        animation: `${contentShowCSS} 0.3s ease-out`,
    },
    '&[data-state=closed]': {
        animation: `${contentHideCSS} 0.2s ease-out`,
    },

    boxShadow: `
    0px 1.8px 2.6px rgba(0, 0, 0, 0.038),
    0px 5px 7.1px rgba(0, 0, 0, 0.057),
    0px 12.1px 17.2px rgba(0, 0, 0, 0.077),
    0px 40px 57px rgba(0, 0, 0, 0.12)
  `,
});

export const ModalContentCSS = css({
    padding: '$8',
    overflowY: 'auto',

    '@mobile': {
        padding: '$5',
    },
});

