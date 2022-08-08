import {css} from "../styles";

export const scrollbarCSS = css({
    '&::-webkit-scrollbar': {
        width: '4px',
        height: '4px',
    },

    '&::-webkit-scrollbar-track': {
        background: '$gray5'
    },

    '&::-webkit-scrollbar-thumb': {
        background: '$gray5',
    },

    '&::-webkit-scrollbar-corner': {
        background: '$gray7',
    },

    scrollbarWidth: 'thin',
    scrollbarColor: '$gray5 $gray7',
})
