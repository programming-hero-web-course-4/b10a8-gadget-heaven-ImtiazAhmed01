import { Link, useLocation } from 'react-router-dom';

const Card = ({ product, handleRemove }) => {
    const { pathname } = useLocation();
    const { product_title, product_image, id, price } = product || {};

    return (
        <div className="card bg-base-100 w-96 shadow-xl border mx-auto">
            <figure className="px-10 pt-10 flex justify-center items-center">
                <img
                    src={product_image}
                    alt={product_title}
                    className="rounded-xl w-full h-52"
                />
            </figure>
            <div className="card-body">
                <h1 className="text-4xl">{product_title}</h1>
                <p>Price: {price}k</p>
                <Link to={`/product/${id}`} className=''>
                    <button className='btn outline outline-[#9538E2] px-3 hover:bg-[#9538E2] hover:text-white rounded-full mt-4'>View Details</button>
                </Link>
            </div>
            {pathname === '/dashboard' && (
                <div
                    onClick={() => handleRemove(id)}
                    className='absolute p-3 rounded-full cursor-pointer bg-warning -top-5 -right-5'
                >
                </div>
            )}
        </div>
    );
};

export default Card;
