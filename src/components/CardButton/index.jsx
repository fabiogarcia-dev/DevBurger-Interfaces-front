import Cart from '../../assets/cart.svg';

import { ContainerButton } from "./styles";

/**botão estilizado que mostra apenas o ícone de um carrinho de compras (sacola). */

export function CardButton({...props}) {
    return (
        <ContainerButton {...props}>
        <img src={Cart} alt='carrinho-de-compras'/>
        </ContainerButton>
    );
} 