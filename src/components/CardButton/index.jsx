import Cart from '../../assets/cart.svg';

import { ContainerButton } from "./styles";

/*estilização do icone sacola que fica no botão*/

export function CardButton({...props}) {
    return (
        <ContainerButton {...props}>
        <img src={Cart} alt='carrinho-de-compras'/>
        </ContainerButton>
    );
} 