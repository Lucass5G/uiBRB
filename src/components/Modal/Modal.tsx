import {styled} from "../../styles";
import * as DialogPrimitive from '@radix-ui/react-dialog';
import React, {ComponentProps, ElementRef, forwardRef, ReactNode} from 'react';
import {ModalContentCSS, ModalOverlayCSS, ModalWrapperCSS} from "../../Declarations/Modal";


const StyledModalOverlay = styled(DialogPrimitive.Overlay, ModalOverlayCSS)
const StyledModalWrapper = styled(DialogPrimitive.Content, ModalWrapperCSS)
const StyledModalContent = styled('div', ModalContentCSS)

export type ModalProps = ComponentProps<typeof DialogPrimitive.Root> & {
    overlay?: boolean,
    children: ReactNode
}

export const Modal = ({children, overlay = true, ...props}: ModalProps) => {
    return (
        <DialogPrimitive.Root {...props}>
            {overlay && <StyledModalOverlay />}
            {children}
        </DialogPrimitive.Root>
    )
}

export type ModalWrapperProps =  DialogPrimitive.DialogContentProps &
    ComponentProps<typeof StyledModalWrapper> & {
    width?: string;
    maintainDimensions?: boolean;
    children?: ReactNode
}

export const ModalWrapper = forwardRef<ElementRef<typeof DialogPrimitive.Content>, ModalWrapperProps>(
    ({children, width=700, maintainDimensions = false, css, ...props}, forwardRef) => {
        return(
            <StyledModalWrapper
                css={{
                    ...(width && {$$maxWidth: `${width}px`}),
                    ...(maintainDimensions && {
                        [`@media (max-width: ${width}px)`]: {
                            width: '100vw',
                            minHeight: '100vh',
                            borderRadius: 0,
                        }
                    }),
                    ...css
                }}
                {...props}
                ref={forwardRef}>
                {children}
            </StyledModalWrapper>
        )
    }
)

ModalWrapper.displayName = 'ModalWrapper';

export const ModalTrigger = DialogPrimitive.Trigger;
ModalTrigger.displayName = 'ModalTrigger';

export const ModalContent = StyledModalContent;
ModalContent.displayName = 'ModalContent';

