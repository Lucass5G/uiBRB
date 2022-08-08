import {styled} from "../../styles";
import * as SeparatorPrimitive from '@radix-ui/react-separator';

import {SeparatorCSS} from "../../Declarations";
import {ComponentProps} from "react";

const StyledSeparator = styled(SeparatorPrimitive.Root, SeparatorCSS);

export type SeparatorProps = ComponentProps<typeof StyledSeparator>

export const Separator = StyledSeparator;
Separator.displayName = 'Separator'
