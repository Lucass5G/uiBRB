import {css} from '../styles'

export const HeadingCSS = css({
    color: '$text-title',
    fontFamily: '$default',
    lineHeight: '$shorter',
    margin: 0,

    '* + &': {
        marginTop: '$5'
    },

    variants: {
        size: {
            sm: { fontSize: '$md' },
            md: { fontSize: '$xl' },
            lg: { fontSize: '$2xl' },
            xl: { fontSize: '$4xl' },
            '2xl': { fontSize: '$7xl' },
        }
    },

    defaultVariants: {
        size: 'sm'
    }
})
