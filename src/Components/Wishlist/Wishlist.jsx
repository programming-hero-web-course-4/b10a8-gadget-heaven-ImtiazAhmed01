import React, { useEffect, useState } from 'react';
import { getStoredProductWishList } from '../../utilityW';

const Wishlist = () => {
    const [wishList, setWishList] = useState([]);

    useEffect(() => {
        const storedProductWishList = getStoredProductWishList();
        console.log("Stored wishlist products:", storedProductWishList, typeof storedProductWishList);

        if (storedProductWishList && Array.isArray(storedProductWishList)) {
            // Filter out duplicates based on `product_id`
            const uniqueProducts = storedProductWishList.reduce((acc, current) => {
                if (!acc.some(item => item.product_id === current.product_id)) {
                    acc.push(current);
                }
                return acc;
            }, []);
            setWishList(uniqueProducts);
        }
    }, []);

    const sortByPrice = () => {
        // Sorting wishList items in descending order of price
        const sortedItems = [...wishList].sort((a, b) => Number(b.price) - Number(a.price));
        setWishList(sortedItems);
    };

    return (
        <div>
            <div className='flex justify-between mt-20 mx-5'>
                <h3 className='text-2xl font-bold'>Wishlist</h3>
                <div className='flex gap-2 mb-5'>
                    <button onClick={sortByPrice} className='btn rounded-2xl'>
                        Sort by Price
                    </button>
                </div>
            </div>
            {wishList.length > 0 ? (
                wishList.map((product) => (
                    <div key={product.product_id} className='border flex justify-between shadow-lg rounded-xl mx-10 my-4'>
                        <div className='flex'>
                            <div className='w-[200px] p-3'>
                                <img className='rounded-xl w-full' src={product.product_image} alt={product.product_title} />
                            </div>
                            <div className='mt-5'>
                                <p className='font-bold'>{product.product_title}</p>
                                <p className='py-2'><span className='font-bold'>Description: </span>{product.description}</p>
                                <p>{product.price} tk</p>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>Your wishlist is empty.</p>
            )}
        </div>
    );
};

export default Wishlist;
