import {styled} from "../../styles";
import {CircleCSS, CircularCSS, SpinnerCSS} from "../../Declarations";
import {ComponentProps, ElementRef, forwardRef} from "react";

const StyledSpinner = styled('div', SpinnerCSS)
const StyledSpinnerCircular = styled('svg', CircularCSS)
const StyledSpinnerCircle = styled('circle', CircleCSS)

export type SpinnerProps = ComponentProps<typeof StyledSpinner>& {
    size?:string;
}

export const Spinner = forwardRef<ElementRef<typeof StyledSpinner>, SpinnerProps>(
    ({size,...props}, forwardRef) => {
        return (
            <StyledSpinner
                {...props}
                ref={forwardRef}
                size={size}
                >
                <StyledSpinnerCircular
                    viewBox='25 25 50 50'>
                    <StyledSpinnerCircle
                        strokeMiterlimit="10"
                        strokeWidth='3'
                        fill='none'
                        r='20'
                        cy='50'
                        cx='50'
                    />
                </StyledSpinnerCircular>
            </StyledSpinner>
        )
    }
)
