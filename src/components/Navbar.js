import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';

const Navbar = () => {
    return (
        <div className="flex justify-end items-center bg-slate-400 p-8">
            <div className="flex mr-12 items-center">
                <input
                    type="text"
                    className="w-[35rem] outline-none rounded-l-full border border-gray-300 bg-slate-200 py-2 pl-5"
                />
                <button className="border border-gray-300 bg-slate-200 py-2 pl-2 pr-3 rounded-r-full  mr-12 ">
                    🔍
                </button>
                <Link to="/" className="font-bold mr-16 text-xl">
                    Shop
                </Link>
                <Link to="/cart">
                    <ShoppingCart size={32} />
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
