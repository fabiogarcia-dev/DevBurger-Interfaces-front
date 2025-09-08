import Logo from '../../assets/Logo.svg'
import { Banner, Container, Content, Tittle } from './styles'

export function Cart(){
    return(
        <Container>
            <Banner>
                <img src={Logo} alt="Logo DevBuerger" />
            </Banner>
            <Tittle>Checkout - Pedido</Tittle>
            <Content>
                {/*<CartItems>*/}

                {/*</CartItems>*/}
            </Content>
        </Container>
    )
}