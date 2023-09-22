import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <div className='mt-8'>
      <Link className='' to="/menu">&larr; Back to menu</Link>

      <p className='pt-10  font-medium'>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
