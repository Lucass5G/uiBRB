import {ComponentProps, ReactNode, useMemo} from "react";
import {styled} from "../../styles";
import {Heading} from '../index'
import {CardHeaderCSS} from "../../Declarations";


export const StyledCardHeader = styled('div', CardHeaderCSS)

export type CardHeaderProps = ComponentProps<typeof StyledCardHeader> & {
    title?: ReactNode;
}

export const CardHeader = ({title: titleProps}: CardHeaderProps) => {
    const title = useMemo(() => {
        if (!titleProps) {
            return null
        }
        return <Heading >{titleProps}</Heading>
    }, [titleProps])
    return (
        <StyledCardHeader>
            {title}
        </StyledCardHeader>
    )
}
