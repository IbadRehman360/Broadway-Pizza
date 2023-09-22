import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { addItem, isInCard } from '../cart/cartSlice';
import Deleteitem from '../cart/Deleteitem';
import UpdateItemQuanitity from '../cart/UpdateItemQuanitity';

function MenuItem({ pizza }) {

  const dispatch = useDispatch()
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  function handleAddToCart() {
    const newItems = {
      pizzaId: id,
      name,
      unitPrice,
      quantity: 1,
      totalPrice: unitPrice * 1,
    }
    dispatch(addItem(newItems))
  }
  const itemsInCard = useSelector(isInCard(id))
  return (
    <li className="flex gap-4 py-4 md:mt-0 ">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          {itemsInCard &&
            <div className='flex gap-3  items-center sm:gap-8'>

              <UpdateItemQuanitity pizzaId={id} quantity={itemsInCard} />
              <Deleteitem pizzaId={id} type="small" />
            </div>
          }

          {!soldOut && !itemsInCard && (

            <Button onClick={handleAddToCart} type="small">Add to cart</Button>
          )}
        </div>
      </div>
    </li >
  );
}

export default MenuItem;
