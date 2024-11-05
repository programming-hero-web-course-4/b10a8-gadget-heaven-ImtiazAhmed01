import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const product = useLoaderData();

    if (!product) {
        return <div>Product not found. Please check the ID and try again.</div>;
    }

    return (
        <div className="card card-side bg-base-100 shadow-xl border mt-10">
            <figure>
                <img className="w-[600px] p-5 rounded-xl" src={product.product_image} alt={product.product_title} />
            </figure>
            <div className="card-body text-left mt-10">
                <h2 className="card-title">{product.product_title}</h2>
                <p>Price: {product.price}k</p>
                <button className="btn btn-xs bg-green-200 text-green-500 mr-64 rounded-full text-left">In stock</button>
                <p>{product.description}</p>

                <p className="font-bold">Specifications:</p>
                {product.specification && product.specification.length > 0 && (
                    <ul className="list-disc pl-5">
                        {product.specification.map((spec, index) => (
                            <li key={index}>{spec}</li>
                        ))}
                    </ul>
                )}

                <div className="card-actions justify-end mt-4">
                    <button className="btn btn-sm btn-primary">Watch</button>
                </div>
            </div>
        </div>
    );
};

export default Details;
