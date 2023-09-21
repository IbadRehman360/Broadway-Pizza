import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utils/helpers';
import { calculatePizzasPrice, calculatePizzasQuantity } from './cartSlice';
function CartOverview() {
  const pizzasQuantity = useSelector((store) => calculatePizzasQuantity(store.cart.cart));
  const pizzasPrice = useSelector((store) => calculatePizzasPrice(store.cart.cart));

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span> {pizzasQuantity} Pizzas </span>
        <span>{formatCurrency(pizzasPrice)} </span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
