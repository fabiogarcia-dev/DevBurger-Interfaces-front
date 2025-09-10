import { createBrowserRouter } from "react-router-dom";
import { Login, Register, Home, Menu, Cart } from "../containers";
import { Header, Footer } from "../components";







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
    }
]);