import { useLoaderData, useParams } from 'react-router-dom';
import Card from '../Card/Card';
import { useEffect, useState } from 'react';

const ProductCard = () => {
    const data = useLoaderData();
    const { category } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (category === 'All' || !category) {
            setProducts(data);
        } else {
            const filteredByCategory = data.filter(
                product => product.category === category
            );
            setProducts(filteredByCategory);
        }
    }, [category, data]);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 my-12'>
            {products.length > 0 ? (
                products.map(product => (
                    <Card key={product.product_id} product={product} />
                ))
            ) : (
                <p>No products to show</p>
            )}
        </div>
    );
};

export default ProductCard;
