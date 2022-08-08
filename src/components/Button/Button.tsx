import {ComponentProps, forwardRef, ReactElement, ElementRef, ReactNode} from "react";
import {ButtonCSS, ButtonLabelCSS, ButtonLoadingCSS} from "../../Declarations/Button";
import {styled} from "../../styles";
import {Spinner} from "../index";

const StyledButton = styled('button', ButtonCSS)
const StyledButtonLabel = styled('span', ButtonLabelCSS)
const StyledButtonLoading = styled('span', ButtonLoadingCSS)

export type ButtonProps = ComponentProps<typeof StyledButton> & {
    leftIcon?: ReactElement
    rightIcon?: ReactElement
    loading?: boolean
    children?: ReactNode,
    size?: string
}

export const Button = forwardRef<ElementRef<typeof StyledButton>, ButtonProps>(
    ({leftIcon, rightIcon, loading, children, disabled,size, ...props}, forwardRef) => {
        return (
            <StyledButton disabled={disabled} loading={loading} ref={forwardRef} {...props}>
                <StyledButtonLabel>
                    {leftIcon}
                    <span>{children}</span>
                    {rightIcon}
                </StyledButtonLabel>

                {loading &&
                    (<StyledButtonLoading>
                        <StyledButtonLoading>
                            <Spinner size={size}/>
                        </StyledButtonLoading>
                    </StyledButtonLoading>)}
            </StyledButton>
        )
    }
)
