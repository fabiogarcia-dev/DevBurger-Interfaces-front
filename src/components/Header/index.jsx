import { Container, Navigation, Options, Profile, LinkContainer, HeaderLink, Logout, Content } from "./styles";
import { UserCircle, ShoppingCart } from "@phosphor-icons/react";

export function Header() {
    return (
        <Container>
            <Content>
                <Navigation>
                    <div>
                        <HeaderLink>
                            Home
                        </HeaderLink>
                        <HeaderLink>
                            Cardápio
                        </HeaderLink>
                    </div>
                </Navigation>
                <Options>
                    <Profile>
                        <div>
                            <UserCircle color="#fff" size={24} />
                            <p>Olá, <span>Fábio</span></p>
                            <Logout>Sair</Logout>
                        </div>
                    </Profile>
                    <LinkContainer>
                        <ShoppingCart size={24} color="#fff" />
                        <HeaderLink>Carrinho</HeaderLink>
                    </LinkContainer>
                </Options>

            </Content>
        </Container>
    );
}