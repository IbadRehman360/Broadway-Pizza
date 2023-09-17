import { createBrowserRouter } from "react-router-dom";
import Menu from "../features/menu/Menu"
import Order from "../features/order/Order"
import CreateOrder from "../features/order/CreateOrder"
import Cart from "../features/cart/Cart"
import Home from "../ui/Home"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/menu",
        element: <Menu />
    },
    {
        path: "/cart",
        element: <Cart />
    },
    {
        path: "/order/new",
        element: <CreateOrder />
    }, {
        path: "/order/:orderId",
        element: <Order />
    }
])

export default router