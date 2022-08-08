import {globalCss} from './index'

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        border: "none"
    },
    "body, button": {
        fontFamily: `$default`,
        fontWeight: `$default`
    },
    body: {
        background: `$background`,
        color: `$neutralColor900`
    },
    "h1, h2, h3, h4, h5, h6": {
        color: '$text-title'
    }
})

