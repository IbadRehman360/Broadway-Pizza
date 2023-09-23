import { createBrowserRouter } from "react-router-dom";
import Menu, { loader as menuLoader } from "../features/menu/Menu"
import Order, { loader as orderLoader } from "../features/order/Order"
import CreateOrder, { action as createOrder } from "../features/order/CreateOrder"
import Cart from "../features/cart/Cart"
import Home from "../ui/Home"
import AppLayout from "../layouts/appLayout";
import Error from "../ui/Error"
import { action as updateOrder } from "../features/order/MakePriority";

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        errorElement: <Error />,

        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/menu',
                element: <Menu />,
                loader: menuLoader,
                errorElement: <Error />,
            },
            { path: '/cart', element: <Cart /> },
            {
                path: '/order/new',
                element: <CreateOrder />,
                action: createOrder,
            },
            {
                path: '/order/:orderId',
                element: <Order />,
                loader: orderLoader,
                action: updateOrder,
                errorElement: <Error />,
            },
        ],
    },
]);

export default router
