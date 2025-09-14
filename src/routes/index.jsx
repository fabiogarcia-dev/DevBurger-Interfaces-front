import { Routes, Route } from "react-router-dom";
import { Login, Register, Home, Menu, Cart, Checkout, CompletePayment } from "../containers";

import { UserLayout } from "../layouts/UserLayout";

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<UserLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/cardapio' element={<Menu />} />
                <Route path='/carrinho' element={<Cart />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/complete' element={<CompletePayment />} />
            </Route>

            <Route path='/login' element={<Login />} />
            <Route path='/cadastro' element={<Register />} />

        </Routes>

    )
}