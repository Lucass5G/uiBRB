import {styled} from "../../styles";
import {HeadingCSS} from "../../Declarations";
import {ComponentProps, ElementRef, ElementType, forwardRef, ReactNode} from "react";

const StyledHeading = styled('h3', HeadingCSS)

export type HeadingProps = ComponentProps<typeof StyledHeading> & {
    as?: ElementType;
    children: ReactNode
}

export const Heading = forwardRef<ElementRef<typeof StyledHeading>, HeadingProps>(
    ({children, ...props}, forwardRef) => {
        return (
            <StyledHeading {...props} ref={forwardRef}>
                {children}
            </StyledHeading>
        )
    })

Heading.displayName = 'Heading'
