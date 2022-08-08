import {styled} from "../../styles";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import {ComponentProps, forwardRef, ReactNode, ElementRef} from "react";
import {CheckIcon} from "@radix-ui/react-icons";
import {Text} from "../text/Text";
import {CheckboxCSS, CheckboxIndicatorCSS, CheckboxLabelCSS} from "../../Declarations";

const StyledCheckbox = styled(CheckboxPrimitive.Root, CheckboxCSS)
const StyledCheckboxIndicator = styled(CheckboxPrimitive.Indicator, CheckboxIndicatorCSS)
const StyledCheckboxLabel = styled('span', CheckboxLabelCSS)
export type CheckboxProps = ComponentProps<typeof StyledCheckbox> & {
    title?: string,
}

export const Checkbox = forwardRef<ElementRef<typeof StyledCheckbox>, CheckboxProps>(
    ({title, ...props}, forwardRef) => {
        return (
            <StyledCheckboxLabel>
                <StyledCheckbox {...props} ref={forwardRef}>
                    <StyledCheckboxIndicator>
                        <CheckIcon/>
                    </StyledCheckboxIndicator>
                </StyledCheckbox>
                <Text size='md'>
                    {title}
                </Text>
            </StyledCheckboxLabel>
        )
    }
)
Checkbox.displayName = 'Checkbox'
