import {styled, css} from '../../styles'

const Container = styled('div', {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
})

const Content = styled('div', {
    width: '80%',
    minHeight: '70vh',
    height: '100%'
})

const Div = styled('div', {
    marginBottom: "$3",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
})

export {Container, Content, Div}
