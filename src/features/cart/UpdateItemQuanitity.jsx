import { useDispatch } from "react-redux"
import Button from "../../ui/Button"
import { decreaseQuantity, increaseQuantity } from "./cartSlice"

function UpdateItemQuanitity({ pizzaId, quantity }) {
    const dispatch = useDispatch()

    return (
        <div className="flex items-center gap-1 md:gap-3">
            <Button type="round" onClick={() => dispatch(decreaseQuantity(pizzaId))}>-</Button>
            {quantity}
            <Button type="round" onClick={() => dispatch(increaseQuantity(pizzaId))}>+</Button>
        </div >
    )
}

export default UpdateItemQuanitity
