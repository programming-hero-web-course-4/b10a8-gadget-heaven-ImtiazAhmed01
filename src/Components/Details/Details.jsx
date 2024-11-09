import { useLoaderData, useParams } from 'react-router-dom';
import { useState } from 'react';
import Banner from '../Banner/Banner';
import { addToStoredProductList } from '../../Utility';
import { addToStoredProductWishList } from '../../utilityW';
import { toast, ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = () => {
    const { productId } = useParams();
    const data = useLoaderData();
    const id = productId;

    // Track if the product is added to cart or wishlist
    const [isCartAdded, setIsCartAdded] = useState(false);
    const [isWishlistAdded, setIsWishlistAdded] = useState(false);

    const product = data ? data.find(item => item.product_id === id) : null;

    if (!product) {
        return <div></div>;
    }

    const { product_image, product_title, price, description, specification } = product;

    const addToCart = (product) => {
        if (isCartAdded) {
            toast.error('Product is already in the cart!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        } else {
            addToStoredProductList(product);
            setIsCartAdded(true);
            toast.success('Added to cart!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
    };

    const addToWishlist = (product) => {
        if (isWishlistAdded) {
            toast.error('Product is already in the wishlist!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        } else {
            addToStoredProductWishList(product);
            setIsWishlistAdded(true);
            toast.success('Added to wishlist!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
    };

    return (
        <div>
            <Banner
                className='-mt-64 px-64 rounded-xl pb-14 text-white'
                title="Product Details"
                description="Explore the latest gadgets that will take your experience to the next level."
                backgroundColor="bg-[#9538E2]"
            />

            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />

            <div className="card card-side bg-base-100 shadow-xl border -mt-28 mx-44">
                <figure className='p-5'>
                    <img className="w-[600px] rounded-xl" src={product_image} alt={product_title} />
                </figure>
                <div className="card-body text-left mt-16">
                    <h2 className="card-title">{product_title}</h2>
                    <p>Price: {price}$</p>
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
                            {isWishlistAdded ? (
                                <img
                                    width="24"
                                    height="24"
                                    backgroundColor='blur'
                                    src="https://img.icons8.com/ios/50/like--v1.png"
                                    alt="like icon"
                                />
                            ) : (
                                <img
                                    width="24"
                                    height="24"
                                    src="https://img.icons8.com/ios/50/like--v1.png"
                                    alt="like icon"
                                />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
