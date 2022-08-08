import {styled} from "../../styles";
import {ContainerCSS, IconCSS, TextFieldCSS} from "../../Declarations";
import {ComponentProps, forwardRef, ReactElement, ElementRef} from "react";

const StyledContainer = styled('div', ContainerCSS)
const StyledTextField = styled('input', TextFieldCSS)
const StyledIcon = styled('div', IconCSS)

export type TextFieldProps = ComponentProps<typeof StyledTextField> & {
    leftIcon?: ReactElement
    rightIcon?: ReactElement
    disabled?: boolean
    error?: boolean
}

export const TextField = forwardRef<ElementRef<typeof StyledTextField>, TextFieldProps>(
    ({leftIcon, rightIcon, disabled, error, ...props}, forwardRef) => {
        return(
            <StyledContainer error={error} disabled={disabled}>
                {leftIcon && <StyledIcon position="left">{leftIcon}</StyledIcon>}
                <StyledTextField
                    {...props}
                    disabled={disabled}
                    hasLeftIcon={!!leftIcon}
                    hasRightIcon={!!rightIcon}
                    ref={forwardRef}
                />
                {rightIcon && <StyledIcon position="right">{rightIcon}</StyledIcon>}
            </StyledContainer>
        )
    }
)
TextField.displayName = 'TextField';
