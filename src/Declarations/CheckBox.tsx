import {css} from "../styles";

export const CheckboxLabelCSS = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '> * + *': {
        marginLeft: '$2'
    },
})

export const CheckboxCSS = css({
    all: 'unset',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    borderRadius: '$default',
    color: '$primary-dark',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    border: '$borderWidths$thin solid $colors$primary-dark',
    '&:hover': { color: '$blue11', borderColor: '$blue11' },
    '&[aria-checked="true"]': {
        backgroundColor: '$primary-dark',
        color: '$white',
        border: 'none'
    },

    variants: {
        size: {
            md: {
                width: '$md',
                height: '$md'
            },
            lg: {
                width: '$lg',
                height: '$lg'
            }
        }
    },
    defaultVariants: {
        size: 'md'
    }
})

export const CheckboxIndicatorCSS = css({
    $$color: '$blue11',
    width: '$md',
    height: '$md',
})

