import {styled} from "../../styles";
import {LinkButtonCSS, LinkButtonLabelCSS} from "../../Declarations/LinkButton";
import {ComponentProps, ElementRef, forwardRef, ReactElement, ReactNode} from "react";

const StyledLinkButton = styled('a', LinkButtonCSS)
const StyledLinkButtonLabel = styled('span', LinkButtonLabelCSS)

export type LinkButtonProps = ComponentProps<typeof StyledLinkButton> & {
    leftIcon?: ReactElement
    rightIcon?: ReactElement
    disabled?: boolean
    children?: ReactNode
    href?: string
}

export const LinkButton = forwardRef<ElementRef<typeof StyledLinkButton>, LinkButtonProps>(
    ({leftIcon, rightIcon, disabled, children, href, ...props}, forwardRef) => {
        return (
            <StyledLinkButton
                disabled={disabled}
                href={href}
                ref={forwardRef}
                {...props}>
                <StyledLinkButtonLabel>
                    {leftIcon}
                    <span>{children}</span>
                    {rightIcon}
                </StyledLinkButtonLabel>
            </StyledLinkButton>
        )
    }
)
