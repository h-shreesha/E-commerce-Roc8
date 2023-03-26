import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';

const Product = (props) => {
    const { id, price, image } = props.data;
    let {title} = props.data
    if (title.length > 30) {
        title = title.substring(0, 30) + '...';
    }

    const {addCart, cartItems} = useContext(ShopContext)
    const cartItemAmount = cartItems[id];

    return (
        <div className="pointer-cursor border border-gray-400 rounded-md shadow p-2">
            <div className=" ">
                <img src={image} alt={title} className="w-[300px] h-[300px] " />
                <h2 className="font-bold text-xl">{title}</h2>
                <h3 className="font-semibold">Rs: {price}</h3>
            </div>
            <button
                className="ml-8 p-2 rounded-lg border border-black mt-4 hover hover:bg-black hover:text-white"
                onClick={() => addCart(id)}
            >
                Add to cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
            </button>
        </div>
    );
};

export default Product;
