import PropTypes from "prop-types";
import { Container, CardImage  } from "./styles";
import { CardButton } from "../CardButton";
import { useCart} from '../../hooks/CartContext'

/**renderiza um card de produto com imagem, nome, preço e um botão de adicionar ao carrinho. */
export function CardProduct({ product }) {  //Cria o componente CardProduct.
    const {putProductInCart} = useCart();  //Usa o hook useCart para obter a função putProductInCart, que adiciona um produto ao carrinho.
    return (
        <Container>
            <CardImage src={product.url} alt={product.name} />
            <div>
                <p>{product.name}</p>
                <strong>{product.currencyValue}</strong>
            </div>
            <CardButton onClick={()=>putProductInCart(product)}></CardButton>
        </Container>
    );
}

CardProduct.PropType={
    product: PropTypes.object.isRequired,
};