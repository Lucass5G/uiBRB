import {styled} from "../../styles";
import {CardCSS, CardWrapperCSS} from "../../Declarations";
import {ComponentProps} from "react";

export const StyledCard = styled('div', CardWrapperCSS)
export const StyledCardContent = styled('div', CardCSS)

export type CardWrapperProps = ComponentProps<typeof StyledCardContent>

export const Card = StyledCard;
Card.displayName = 'Card'

export const CardContent = StyledCardContent;
CardContent.displayName = 'CardContent'
