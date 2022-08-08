import {css} from "../styles";

export const ButtonLabelCSS = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '> * + *': {
        marginLeft: '$3'
    }
})

export const ButtonCSS = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    height: '$12',
    padding: '0 $8',
    backgroundColor: '$primary-dark',
    color: '$$color',
    border: '1px solid transparent',
    borderRadius: '$default',
    fontSize: '$sm',
    fontFamily: '$default',
    fontWeight: '$bold',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',

    //TO-DO - add color hover in disabled
    '&:disabled': {
        cursor: 'not-allowed',
        opacity: '0.5',
    },

    '&:hover:not(:disabled)': {
        backgroundColor: '$$hoverColor',
    },

    '&:focus-visible': {
        outline: 0,
        boxShadow: '0 0 0 4px $colors$color-background, 0 0 0 6px rgba(255, 255, 255, 0.7)',
    },
    variants: {
        size: {
            sm: {
                height: '$md',
                padding: '0 $4',
                fontSize: '$xs',
            },
            md: {
                height: '$xl',
                padding: '0 $6',
            },
            lg: {
                height: '$3xl',
                padding: '0 $8',
            },
        },
        variant: {
            primary: {
                backgroundColor: '$colors$primary-dark',
                color: '$colors$white',
                $$hoverColor: '$colors$primary-mid',
            },
            secondary: {
                backgroundColor: '$colors$overlayW1',
                $$color: '$colors$black',
                $$hoverColor: '$colors$blue11',
                border: '1px solid $colors$blue11',
                '&:hover': {
                    color: '$colors$white',
                }
            },
            tertiary: {
                backgroundColor: '$colors$overlayB12',
                color: '$colors$white',
                $$hoverColor: '$colors$overlayB11',
            },
            danger: {
                backgroundColor: '$colors$danger-light',
                color: '$colors$white',
                $$hoverColor: '$colors$danger-base',
            },
            warning: {
                backgroundColor: '$colors$warning-light',
                color: '$colors$white',
                $$hoverColor: '$colors$warning-base',
            }
        },
        full: {
            true: {
                display: 'block',
                width: '100%',
            }
        },
        loading: {
            true: {
                [ButtonLabelCSS.selector]: {
                    visibility: 'hidden',
                }
            }
        }
    },
    defaultVariants: {
        variant: 'primary',
        size: 'md',
    }
})

export const ButtonLoadingCSS = css({
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})
