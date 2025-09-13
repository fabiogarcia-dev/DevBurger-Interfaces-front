import { Button } from "../Button"
import { Container } from './styles'
import { toast } from 'react-toastify'
import { useEffect, useState } from "react"
import { useCart } from '../../hooks/CartContext'
import { api } from '../../services/api'
import { formatPrice } from '../../utils/formatPrice'
import { useNavigate } from "react-router-dom"

/**mostra o resumo final do carrinho de compras e finaliza o pedido. */
export function CartResume() {
    const [finalPrice, setFinalPrice] = useState(0);
    const [deliveryTax] = useState(500);  //taxa fixa de entrega (500 centavos → R$ 5,00, por exemplo).

    const navigate = useNavigate();  //permite mudar de página após finalizar o pedido.

    const { cartProducts, clearCart } = useCart();

    useEffect(() => {  //Sempre que cartProducts mudar:
        const sumAllItems = cartProducts.reduce((acc, current) => {  //Faz um .reduce para somar o valor total de todos os produtos do carrinho.
            return current.price * current.quantity + acc;
        }, 0);

        setFinalPrice(sumAllItems);
    }, [cartProducts])

    const submitOrder = async () => {  //Cria a função submitOrder que será chamada ao clicar em "Finalizar Pedido".
        const products = cartProducts.map((product) => {
            return { id: product.id, quantity: product.quantity, price: product.price };
        });
        
        try {
            const { data } = await api.post('/create-payment-intent', { products });

            navigate('/checkout',{
                state: data,
            })
        } catch (err) {
            toast.error('Erro tente novamente!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    return (
        <div>
            <Container>
                <div className="container-top">
                    <h2 className="tittle">Resumo do Pedido</h2>
                    <p className="items">Itens</p>
                    <p className="items-price">{formatPrice(finalPrice)}</p>
                    <p className="delivery-tax">Taxa de Entrega</p>
                    <p className="delivery-tax-price">{formatPrice(deliveryTax)}</p>
                </div>
                <div className="container-Bottom">
                    <p>Total</p>
                    <p>{formatPrice(finalPrice + deliveryTax)}</p>
                </div>
            </Container>
            <Button onClick={submitOrder}>Finalizar Pedido</Button>
        </div>
    )
}