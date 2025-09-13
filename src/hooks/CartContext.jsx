import { useContext, createContext, useEffect, useState } from "react";

/**Cria o contexto global do carrinho, que será compartilhado entre componentes.
O CartProvider + useCart faz a gestão completa do carrinho:
Adicionar produtos
Remover produtos
Aumentar/diminuir quantidade
Limpar carrinho
Persistir dados no localStorage
Disponibilizar todas essas funções para outros componentes da aplicação
 */

const CartContext = createContext({});

export const CartProvider = ({ children }) => {  //provê o contexto para toda a aplicação
    const [cartProducts, setCartProducts] = useState([])

    /**Procura se o produto já está no carrinho (findIndex)
Se existir → aumenta a quantidade
Se não existir → adiciona o produto com quantity = 1
Atualiza o localStorage para persistir os dados */

    const putProductInCart = (product) => {
        const CartIndex = cartProducts.findIndex((prd) => prd.id === product.id)

        let newProductsInCart = [];

        if (CartIndex >= 0) {
            newProductsInCart = cartProducts;
            newProductsInCart[CartIndex].quantity = newProductsInCart[CartIndex].quantity + 1;

            setCartProducts(newProductsInCart)
        } else {
            product.quantity = 1
            newProductsInCart = [...cartProducts, product];
            setCartProducts(newProductsInCart)
        }

        updateLocalStorage(newProductsInCart);
    };

    /**Salva o carrinho no navegador para persistir os dados mesmo após atualizar a página */
    const updateLocalStorage = (products) => {
        localStorage.setItem('devburger: cartInfo', JSON.stringify(products));
    };

    const clearCart = () => {  //Limpa todos os produtos do carrinho e do localStorage
        setCartProducts([]);

        updateLocalStorage([]);
    };
    const deleteProduct = (productId) => {  //Deleta produto do carrinho
        const newCart = cartProducts.filter((prd) => prd.id !== productId)

        setCartProducts(newCart);
        updateLocalStorage(newCart)
    };
    const increaseProduct = (productId) => {  //Aumenta a quantidade de um produto específico
        const newCart = cartProducts.map(prd => {
            return prd.id === productId ? { ...prd, quantity: prd.quantity + 1 } : prd;
        })

        setCartProducts(newCart);
        updateLocalStorage(newCart);
    };
    const decreaseProduct = (productId) => {  ////Diminui a quantidade de um produto específico
        const CartIndex = cartProducts.findIndex((prd) => prd.id === productId)

        if (cartProducts[CartIndex].quantity > 1) {
            const newCart = cartProducts.map(prd => {
                return prd.id === productId ? { ...prd, quantity: prd.quantity - 1 } : prd;
            });

            setCartProducts(newCart);
            updateLocalStorage(newCart);
        } else {
            deleteProduct(productId)
        }
    };

    useEffect(() => {  //Ao montar o componente, carrega produtos previamente salvos no navegador
        const clientCartData = localStorage.getItem('devburger: cartInfo');
        if (clientCartData) {
            setCartProducts(JSON.parse(clientCartData));
        }
    }, []);


    return (<CartContext.Provider value={{ cartProducts, putProductInCart, clearCart, deleteProduct, increaseProduct, decreaseProduct, }}>{children}
    </CartContext.Provider>
    )
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used with a context');
    }
    return context;
}