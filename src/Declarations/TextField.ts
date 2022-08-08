import {css} from '../styles'

const ICON_PADDING = '$6'
export const IconCSS = css({
    position: 'absolute',
    top: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '$xl',
    height: '100%',
    color: '$primary-dark',
    transition: 'color .2s',

    variants: {
        position: {
            left: {
                left: '1px',
            },
            right: {
                right: '2px',
            },
        },
    },
})

export const ContainerCSS = css({
    position: 'relative',
    display: 'flex',
    width: '100%',
    transition: 'opacity .2s',

    '&:focus-within': {
        input: {
            borderColor: '$primary-mid',
            '&::placeholder': {
                color: '$primary-mid',
            },
        },

        [IconCSS.selector]: {
            color: '$primary-mid',
        },
    },

    variants: {
        disabled: {
            true: {
                opacity: '50%',
            },
        },
        error: {
            true: {
                input: {
                    borderColor: '$danger-base',
                },
                [IconCSS.selector]: {
                    color: '$danger-base',
                },
            },
        },
    },
})

export const TextFieldCSS = css({
    boxSizing: 'border-box',
    outline: 0,
    width: '100%',
    height: '$xl',
    padding: '0 $4',
    fontFamily: '$default',
    fontSize: '$md',
    color: '$text-title',
    backgroundColor: '$gray1',
    border: '2px solid $primary-dark',
    borderRadius: '$default',
    transition: 'border-color 0.2s',

    '&::placeholder': {
        color: '$primary-dark',
    },

    variants: {
        hasLeftIcon: {
            true: {
                paddingLeft: ICON_PADDING,
            },
        },
        hasRightIcon: {
            true: {
                paddingRight: ICON_PADDING,
            },
        },
    },
})
