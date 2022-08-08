import {AriaRole, useState} from "react";
import {ArrowTopRightIcon, VercelLogoIcon} from '@radix-ui/react-icons'
import {Container, Content, Div} from './styles'
import {
    TextField,
    Text,
    Card,
    CardContent,
    CardHeader,
    ModalContent,
    Modal,
    ModalWrapper,
    ModalTrigger,
    Heading,
    Button,
    LinkButton,
    Separator,
    Checkbox,
    Spinner,
    AlertDialog
} from "../../components";


export default function HomePage() {
    const [truthy, setTruthy] = useState(false)
    return (
        <Container>
            <Text>Página de componentes!</Text>
            <Content>
                <Text>Only Label</Text>
                <Div>
                    <TextField
                        error={truthy}
                        placeholder="Placeholder"
                        leftIcon={<VercelLogoIcon/>}
                    />
                    <br/>
                    <Button
                        onClick={() => setTruthy(!truthy)}
                        variant={truthy ? 'primary' : 'danger'}>
                        {truthy ? 'Default' : 'Error'}
                    </Button>
                </Div>
                <Separator decorative variant='primary'/>
                <Text>Modal</Text>
                <Div>
                    <Modal>
                        <ModalTrigger asChild>
                            <Button
                                rightIcon={<VercelLogoIcon/>}
                                full>
                                Open Modal
                            </Button>
                        </ModalTrigger>
                        <ModalWrapper>
                            <ModalContent>
                                <Card>
                                    <CardHeader title='Modal with Card Header'/>
                                    <CardContent>
                                        <Text>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. At sunt incidunt
                                            accusantium dolorem quod nesciunt facere, sequi consectetur assumenda
                                            laboriosam libero quidem sint ipsum, fugit culpa, minus facilis vitae
                                            voluptatem expedita soluta autem labore.
                                        </Text>
                                    </CardContent>
                                </Card>
                                <Heading>
                                    Sem card
                                </Heading>
                                <Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At sunt incidunt
                                    accusantium dolorem quod nesciunt facere, sequi consectetur assumenda laboriosam
                                    libero quidem sint ipsum, fugit culpa, minus facilis vitae voluptatem expedita
                                    soluta autem labore. Ullam quos, recusandae facilis similique assumenda eum adipisci
                                    alias, incidunt rem veritatis quasi!
                                </Text>
                                <br/>
                                <Card>
                                    <Heading>Sem Header</Heading>
                                    <CardContent>
                                        <Text>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. At sunt incidunt
                                            accusantium dolorem quod nesciunt facere, sequi consectetur assumenda
                                            laboriosam libero quidem sint ipsum, fugit culpa, minus facilis vitae
                                            voluptatem expedita soluta autem labore.
                                        </Text>
                                    </CardContent>
                                </Card>
                            </ModalContent>
                        </ModalWrapper>
                    </Modal>
                </Div>
                <Separator/>
                <Text>Buttons</Text>
                <Div>
                    <Button
                        rightIcon={<VercelLogoIcon/>}
                        size='sm'>
                        Primary
                    </Button>
                    <br/>
                    <Button
                        variant="secondary"
                        rightIcon={<VercelLogoIcon/>}
                        full size='md'>
                        Secondary
                    </Button>
                    <br/>
                    <Button
                        variant="tertiary"
                        leftIcon={<VercelLogoIcon/>}
                        size='md'
                        loading disabled>
                        Tertiary
                    </Button>
                    <br/>
                    <Button
                        variant="danger"
                        leftIcon={<VercelLogoIcon/>}
                        full>
                        Danger
                    </Button>
                    <br/>
                    <Button
                        variant="warning"
                        leftIcon={<VercelLogoIcon/>}
                        full>
                        Danger
                    </Button>
                </Div>
                <Separator/>
                <Text>Link Button</Text>
                <Div>
                    <LinkButton
                        variant="secondary"
                        href="https://www.google.com"
                        rightIcon={<ArrowTopRightIcon/>}
                    >
                        Link Button
                    </LinkButton>
                </Div>
                <Separator/>
                <Text>Checkbox</Text>
                <Div>
                    <Checkbox size='lg' title='Li e concordo com os termos de uso'/>
                </Div>
                <Separator/>
                <Text>Spinner</Text>
                <Spinner size="xl"/>
                <Separator/>
                <Text>Dialog</Text>
                <AlertDialog title='Teste'>
                    <Text>Not yet</Text>
                </AlertDialog>
            </Content>
        </Container>
    )
}
