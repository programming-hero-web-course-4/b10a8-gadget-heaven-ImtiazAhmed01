import { useLoaderData, useOutletContext } from 'react-router-dom';
import Banner from '../Banner/Banner';

const Details = () => {
    const product = useLoaderData();
    const { handleAddToCart } = useOutletContext();  // Access handleAddToCart from Outlet context

    if (!product) {
        return <div>Product not found. Please check the ID and try again.</div>;
    }

    return (
        <div>
            <Banner
                className='-mt-64 px-64 rounded-xl pb-14 text-white'
                title="Product Details"
                description="Explore the latest gadgets that will take your experience to the next level."
                backgroundColor="bg-[#9538E2]"
            />

            <div className="card card-side bg-base-100 shadow-xl border -mt-28 mx-44">
                <figure>
                    <img className="w-[600px] p-5 rounded-xl" src={product.product_image} alt={product.product_title} />
                </figure>
                <div className="card-body text-left mt-16">
                    <h2 className="card-title">{product.product_title}</h2>
                    <p>Price: {product.price}k</p>
                    <button className="btn btn-xs bg-green-200 text-green-500 mr-72 rounded-full text-left">In stock</button>
                    <p>{product.description}</p>

                    <p className="font-bold">Specifications:</p>
                    {product.specification && product.specification.length > 0 && (
                        <ul className="list-decimal pl-5">
                            {product.specification.map((spec, index) => (
                                <li key={index}>{spec}</li>
                            ))}
                        </ul>
                    )}

                    <div className="card-actions justify-start mt-4 gap-5">
                        <button className="btn btn-sm bg-[#9538E2] rounded-2xl text-white text-lg px-3" onClick={() => handleAddToCart(product)}>
                            Add To Cart
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </button>
                        <button className="btn btn-circle drop-shadow-2xl rounded-full border">
                            <img width="24" height="24" src="https://img.icons8.com/ios/50/like--v1.png" alt="like" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
