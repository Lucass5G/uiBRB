import {ComponentProps, ElementRef, forwardRef, ReactNode} from 'react'
import {styled} from "../../styles";
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import {DialogContentCSS, DialogDescriptionCSS, DialogOverlayCSS, DialogTitleCSS} from "../../Declarations";
import {Button} from "../index";

const StyledDialogOverlay = styled(AlertDialogPrimitive.Overlay, DialogOverlayCSS)
const StyledDialogContent = styled(AlertDialogPrimitive.Content, DialogContentCSS)
const StyledDialogTitle = styled(AlertDialogPrimitive.Title, DialogTitleCSS)
const StyledDialogDescription = styled(AlertDialogPrimitive.Description, DialogDescriptionCSS)
const StyledDialogTrigger = styled(AlertDialogPrimitive.Trigger, {})

type AlertDialogProps = ComponentProps<typeof AlertDialogPrimitive.Root> & {
    titleButton?: string,
    title?: string,
    description?: string,
    children?: ReactNode,

}

export const AlertDialog = ({titleButton, title, description, children, ...props}: AlertDialogProps) => {
    return (
        <AlertDialogPrimitive.Root {...props}>
            <StyledDialogTrigger asChild>
                <Button>{titleButton}</Button>
            </StyledDialogTrigger>
            <StyledDialogContent>
                <StyledDialogTitle>{title}</StyledDialogTitle>
                <StyledDialogDescription>{description}</StyledDialogDescription>
                {children}
                <AlertDialogPrimitive.Cancel asChild>
                    <Button>Cancel</Button>
                </AlertDialogPrimitive.Cancel>
                <AlertDialogPrimitive.Action asChild>
                    <Button>Confirm</Button>
                </AlertDialogPrimitive.Action>
            </StyledDialogContent>
        </AlertDialogPrimitive.Root>
    )
}
