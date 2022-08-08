import {css} from "../styles";

export const SeparatorCSS = css({
    '&[data-orientation="horizontal"]': {height: '2px', width: '100%'},
    '&[data-orientation="vertical"]': {height: '100%', width: '2px'},
    variants: {
        variant: {
            primary: {
                backgroundColor: '$colors$primary-dark',
            },
            secondary: {
                backgroundColor: '$colors$primary-mid',
            },
            tertiary: {
                backgroundColor: '$colors$black',
            }
        }
    },
    defaultVariants: {
        variant: 'primary',
    }
})
