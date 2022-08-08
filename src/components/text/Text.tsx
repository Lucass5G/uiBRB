import {styled} from '../../styles'
import {TextCSS} from "../../Declarations";
import {ComponentProps, ElementRef, ElementType, forwardRef, ReactNode} from "react";

const StyledText = styled('p', TextCSS)

export type TextProps = ComponentProps<typeof StyledText> & {
    as?: ElementType,
    children?: ReactNode
}

export const Text = forwardRef<ElementRef<typeof StyledText>, TextProps>(
    ({children, ...props}, forwardedRef) => {
        return (
            <StyledText {...props} ref={forwardedRef}>
                {children}
            </StyledText>
        )
    })
Text.displayName = 'Text';
