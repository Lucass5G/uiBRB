import {css} from '../styles'
export const TextCSS = css({
    color: '$text-title',
    fontFamily: '$default',
    lineHeight: '$tall',

    '* + &': {
        marginTop: '$smd'
    },

    variants: {
        size: {
            sm: {fontSize: '$sm'},
            md: {fontSize: '$md'},
            lg: {fontSize: '$lg'},
            xs: {fontSize: '$xs'},
        }
    },
    defaultVariants: {
        size: 'md'
    }
})
