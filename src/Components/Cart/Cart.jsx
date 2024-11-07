import React, { useEffect, useState } from 'react';
import { getStoredProductList } from '../../Utility';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedProductList = getStoredProductList();
        console.log("Stored products:", storedProductList, typeof storedProductList);

        if (storedProductList && Array.isArray(storedProductList)) {

            const uniqueProducts = storedProductList.reduce((acc, current) => {
                if (!acc.some(item => item.product_id === current.product_id)) {
                    acc.push(current);
                }
                return acc;
            }, []);
            setCartItems(uniqueProducts);
        }
    }, []);

    const sortByPrice = () => {

        const sortedItems = cartItems.slice().sort((a, b) => b.price - a.price);
        setCartItems([...sortedItems]);
    };

    return (
        <div>
            <div className='flex justify-between mt-20 mx-5'>
                <h3 className='text-2xl font-bold'>Cart</h3>
                <div className='flex gap-2 mb-5'>
                    <h3 className="font-bold mt-3">Total cost:</h3>
                    <button onClick={sortByPrice} className='btn rounded-2xl'>
                        Sort by Price
                    </button>
                    <button className='btn rounded-2xl'>Purchase</button>
                </div>
            </div>
            {cartItems.length > 0 ? (
                cartItems.map((product, index) => (
                    <div key={index} className='border flex justify-between shadow-lg rounded-xl mx-10 my-4'>
                        <div className='flex'>
                            <div className='w-[200px] p-3'>
                                <img className='rounded-xl w-full' src={product.product_image} alt={product.product_title} />
                            </div>
                            <div className='mt-5'>
                                <p className='font-bold'>{product.product_title}</p>
                                <p className='py-2'><span className='font-bold py-2'>Description: </span>{product.description}</p>
                                <p>{product.price} tk</p>
                            </div>
                        </div>
                        <button className=' mt-4 mr-5'><img className='text-red-700' width="25" height="25" src="https://img.icons8.com/ios/50/cancel.png" alt="cancel" /></button>
                    </div>
                ))
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
};

export default Cart;

