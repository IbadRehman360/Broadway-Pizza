import { Link } from "react-router-dom"
import SearchOrder from "../features/order/SearchOrder"

function Header() {

    return (
        <head>
            <Link to="/"> BROADWAY PIZZA CO.</Link>
            <SearchOrder />
        </head>
    )
}

export default Header
