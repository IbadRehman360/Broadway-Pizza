import { createBrowserRouter } from "react-router-dom";
import Menu, { Loader as menuLoader } from "../features/menu/Menu"
import Order, { Loader as orderLoader } from "../features/order/Order"
import CreateOrder from "../features/order/CreateOrder"
import Cart from "../features/cart/Cart"
import Home from "../ui/Home"
import AppLayout from "../layouts/appLayout";
import Error from "../ui/Error"
const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [

            {
                path: "/",
                element: <Home />
            },
            {
                path: "/menu",
                element: <Menu />,
                loader: menuLoader,
                errorElement: < Error />,

            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/order/new",
                element: <CreateOrder />
            }, {
                path: "/order/:orderId",
                element: <Order />,
                loader: orderLoader,
                errorElement: < Error />,

            }
        ]
    }
])

export default router