/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';

const Category = ({ categories }) => {
    return (
        <div className=''>
            <div role='tablist' className='flex flex-col gap-4'> {/* Flex column layout */}
                {categories.map(category => (
                    <NavLink
                        key={category.category}
                        to={`/category/${category.category}`}
                        role='tab'
                        className={({ isActive }) =>
                            `btn text-2xl font-thin rounded-xl mx-96 ${isActive ? 'tab-active' : ''} hover:bg-[#9538E2]`
                        }
                    >
                        {category.category}
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default Category;



{/* <button className="btn btn-neutral">Neutral</button>
<button className="btn btn-primary">Primary</button>
<button className="btn btn-secondary">Secondary</button>
<button className="btn btn-accent">Accent</button> */}