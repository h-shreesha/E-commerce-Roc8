import React, { useContext } from 'react';
import { ProductsData } from '../shop/ProductsData';
import { ShopContext } from '../../context/ShopContext';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cartItems, totalAmt } = useContext(ShopContext);
    const totalAmount = totalAmt();
    const navigate = useNavigate();
    return (
        <div>
            <div>
                <h1 className="text-center font-bold text-5xl p-8">
                    Your Cart Items
                </h1>
            </div>
            <div>
                {ProductsData.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product} />;
                    }
                })}
            </div>

            {totalAmount > 0 ? (
                <div className='text-center mb-8'>
                    <p className='font-bold text-xl'>Subtotal: Rs{totalAmount} </p>
                    <button
                        className="ml-8 p-2 rounded-lg border border-black mt-4 hover hover:bg-black hover:text-white"
                        onClick={() => navigate('/')}
                    >
                        Continue Shopping
                    </button>
                    <button className="ml-8 p-2 rounded-lg border border-black mt-4 hover hover:bg-black hover:text-white">
                        Checkout
                    </button>
                </div>
            ) : (
                <h1>Your cart is empty</h1>
            )}
        </div>
    );
};

export default Cart;
