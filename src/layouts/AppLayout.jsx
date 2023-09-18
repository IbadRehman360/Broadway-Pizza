import { Outlet, useNavigation } from "react-router-dom"
import Loading from "../ui/Loading"
import Header from "./Header"
import CartOverview from "../features/cart/CartOverview"
function AppLayout() {
    const navigation = useNavigation()
    const isloader = navigation.state === "loading"
    return (
        <div className="layout">
            {isloader && <Loading />}
            <Header />
            <main>
                <Outlet />
            </main>
            <CartOverview />
        </div>
    )
}

export default AppLayout
