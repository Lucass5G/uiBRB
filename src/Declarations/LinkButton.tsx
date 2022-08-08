import {css} from "../styles";

export const LinkButtonLabelCSS = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    '> * + *': {
        marginLeft: "$3"
    }
})

export const LinkButtonCSS = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: 'relative',

    cursor: 'pointer',
    transition: 'color 0.2s',

    '&:focus': {
        outline: 0,
        boxShadow: '0 0 0 4px $colors$blue7, 0 0 0 6px rgba(255, 255, 255, 0.7)'
    },

    variants: {
        variant: {
            primary: {
                color: '$primary-dark',
                '&:hover': {
                    color: '$primary-dark',
                },

                '& > span > span': {
                    position: 'relative',
                },

                '& > span > span::before': {
                    content: '',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,

                    width: '0px',
                    height: '1px',

                    transition: 'width 0.2s',

                    backgroundColor: '$primary-dark',
                },

                '&:hover > span > span::before': {
                    width: '100%',
                },
            },
            secondary: {
                color: '$gray12',

                '&:hover': {
                    color: '$gray10',
                },
            },
            tertiary: {
                color: '$gray7',

                '&:hover': {
                    color: '$gray6',
                },
            },
        },
        size: {
            md: {
                height: '$6',
                fontSize: '$md',
            },
            sm: {
                height: '$5',
                fontSize: '$sm',
            },
        },
        disabled: {
            true: {
                pointerEvents: 'none',
                cursor: 'not-allowed',
                opacity: '0.5',
            },
        },
    },
    defaultVariants: {
        variant: 'primary',
        size: 'md',
    }
})
