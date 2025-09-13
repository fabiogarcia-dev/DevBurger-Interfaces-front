import { Table } from '../index';
import { useCart } from '../../hooks/CartContext'
import { formatPrice } from '../../utils/formatPrice';
import { EmptyCart, ButtonGroup, ProductImage, ProductTotalPrice, TrashImage } from './styles';
import TrashIcon from '../../assets/trash.svg';

/**componente responsável por exibir todos os produtos que estão no carrinho de compras em forma de tabela. */
export function CartItems() {
    const { cartProducts, increaseProduct, decreaseProduct, deleteProduct } = useCart();
    return (
        <Table.Root>
            <Table.Header>
                <Table.Tr>
                    <Table.Th></Table.Th>
                    <Table.Th>Itens</Table.Th>
                    <Table.Th>Preço</Table.Th>
                    <Table.Th>Quantidade</Table.Th>
                    <Table.Th>Total</Table.Th>
                    <Table.Th></Table.Th>
                </Table.Tr>
            </Table.Header>
            <Table.Body>
                {cartProducts?.length ? ( //Verifica se existem produtos no carrinho
                    cartProducts.map(product => (  //Se houver produtos, faz um .map para renderizar cada produto como uma linha da tabela.
                        <Table.Tr key={product.id}>
                            <Table.Td><ProductImage src={product.url} /></Table.Td>
                            <Table.Td>{product.name}</Table.Td>
                            <Table.Td>{product.currencyValue}</Table.Td>
                            <Table.Td>
                                <ButtonGroup>
                                    <button onClick={()=> decreaseProduct(product.id)}>-</button>
                                    {product.quantity}
                                    <button onClick={()=> increaseProduct(product.id)}>+</button>
                                    </ButtonGroup>
                                    </Table.Td>
                            <Table.Td>
                                <ProductTotalPrice>
                                    {formatPrice(product.quantity * product.price)}
                                </ProductTotalPrice>
                            </Table.Td>
                            <Table.Td>
                                <TrashImage src={TrashIcon} alt='Lixeira' onClick={() => deleteProduct(product.id)}></TrashImage>
                            </Table.Td>
                        </Table.Tr>
                    ))
                ) : <EmptyCart>Carrinho Vazio</EmptyCart>}
            </Table.Body>
        </Table.Root>
    )
}