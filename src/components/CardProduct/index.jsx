import PropTypes from "prop-types";
import { Container, CardImage  } from "./styles";
import { CardButton } from "../CardButton";
import { useCart} from '../../hooks/CartContext'


export function CardProduct({ product }) {
    const {putProductInCart} = useCart();
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