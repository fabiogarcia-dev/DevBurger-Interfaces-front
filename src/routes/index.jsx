import { createBrowserRouter } from "react-router-dom";
import { Login, Register, Home, Menu, Cart, Checkout, CompletePayment } from "../containers";
import { Header, Footer } from "../components";

/**Exporta as Rotas para navegação */

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <Header />
                <Home />
                <Footer/>
            </>
        ),
    },
    {
        path: '/Login',
        element: <Login />,
    },
    {
        path: '/cadastro',
        element: <Register />,
    },
    {
        path: '/cardapio',
        element:(
            <>
                <Header />
                <Menu />
            </>
        ),
    },
    {
        path: 'carrinho',
        element: <Cart/>
    },
     {
        path: '/checkout',
        element: <Checkout/>
    },
     {
        path: '/complete',
        element: <CompletePayment/>
    }
]);