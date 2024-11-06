const Wishlist = ({ wishlistItems }) => {
    return (
        <div>
            <h2 className="text-xl font-bold">Your Wishlist</h2>
            {wishlistItems.length === 0 ? (
                <p>No items in wishlist</p>
            ) : (
                <ul>
                    {wishlistItems.map((item, index) => (
                        <li key={index} className="my-2">
                            <img className="w-[100px] h-[100px] object-cover" src={item.product_image} alt={item.product_title} />
                            <p>{item.product_title}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Wishlist;
