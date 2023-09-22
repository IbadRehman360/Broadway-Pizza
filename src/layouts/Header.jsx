import { Link } from "react-router-dom"
import SearchOrder from "../features/order/SearchOrder"

function Header() {
    return (
        <header>
            <Link to="/" className="text-[0.7rem] "> BROADWAY PIZZA CO.</Link>
            <SearchOrder />
        </header>
    )
}

export default Header
