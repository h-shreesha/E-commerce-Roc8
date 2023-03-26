import React, {useContext} from 'react';
import { ShopContext } from '../../context/ShopContext';

const CartItem = (props) => {
    const { id, price, image } = props.data;
    let { title } = props.data;
    if (title.length > 30) {
        title = title.substring(0, 30) + '...';
    }
    const { cartItems, addCart, removeCart, manualUpdate} = useContext(ShopContext )
    return (
        <div className="flex justify-center items-center text-center">
            <div className="border border-gray-600 shadow-md rounded-md p-2 mb-4">
                <div className="">
                    <img
                        src={image}
                        alt={title}
                        className="w-[300px] h-[300px] "
                    />
                    <h2 className="font-bold text-xl">{title}</h2>
                    <h3 className="font-semibold">Rs: {price}</h3>
                </div>
                <div>
                    <button
                        className="p-2 border border-gray-900"
                        onClick={() => removeCart(id)}
                    >
                        -
                    </button>
                    <input
                        value={cartItems[id]}
                        className="w-10 text-center border border-gray-900 p-2"
                        onChange={(e) =>
                            manualUpdate(Number(e.target.value), id)
                        }
                    />
                    <button
                        className="p-2 border border-gray-900"
                        onClick={() => addCart(id)}
                    >
                        {' '}
                        +
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
