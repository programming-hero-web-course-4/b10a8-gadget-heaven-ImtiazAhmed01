import { useLoaderData, useParams } from 'react-router-dom';
import { useState } from 'react';
import Banner from '../Banner/Banner';
import { addToStoredProductList } from '../../Utility';
import { addToStoredProductWishList } from '../../utilityW';

const Details = () => {
    const { productId } = useParams();
    const data = useLoaderData();
    const id = productId;

    // Track if the product is added to the wishlist
    const [isWishlistAdded, setIsWishlistAdded] = useState(false);

    const product = data ? data.find(item => item.product_id === id) : null;

    if (!product) {
        return <div></div>;
    }

    const { product_image, product_title, price, description, specification } = product;

    const addToCart = (product) => {
        console.log(product);
        addToStoredProductList(product);
    };

    const addToWishlist = (product) => {
        addToStoredProductWishList(product);
        setIsWishlistAdded(true); // Disable the button after adding to wishlist
    };

    return (
        <div>
            <Banner
                className='-mt-64 px-64 rounded-xl pb-14 text-white'
                title="Product Details"
                description="Explore the latest gadgets that will take your experience to the next level."
                backgroundColor="bg-[#9538E2]"
            />

            <div className="card card-side bg-base-100 shadow-xl border -mt-28 mx-44">
                <figure className='p-5'>
                    <img className="w-[600px] rounded-xl" src={product_image} alt={product_title} />
                </figure>
                <div className="card-body text-left mt-16">
                    <h2 className="card-title">{product_title}</h2>
                    <p>Price: {price}k</p>
                    <button className="btn btn-xs bg-green-200 text-green-500 mr-72 rounded-full text-left">In stock</button>
                    <p>{description}</p>
                    <p className="font-bold">Specifications:</p>
                    {specification && specification.length > 0 && (
                        <ul className="list-decimal pl-5">
                            {specification.map((spec, index) => (
                                <li key={index}>{spec}</li>
                            ))}
                        </ul>
                    )}

                    <div className="card-actions justify-start mt-4 gap-5">
                        <button className='btn rounded-full bg-[#9538E2]' onClick={() => addToCart(product)}>Add To Cart</button>
                        <button
                            className='btn rounded-full border'
                            onClick={() => addToWishlist(product)}
                            disabled={isWishlistAdded} // Disable the button after clicking
                        >
                            {isWishlistAdded ? 'Added to Wishlist' : 'Add To Wishlist'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
