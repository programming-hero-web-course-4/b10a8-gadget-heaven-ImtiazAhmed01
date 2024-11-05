import { NavLink } from 'react-router-dom';

const Category = ({ categories }) => {
    return (
        <div className=''>
            <div role='tablist' className='flex flex-col gap-4 mt-16 border p-7'>
                <NavLink
                    to={`/category/All`}
                    role='tab'
                    className={({ isActive }) =>
                        `btn text-2xl font-thin rounded-xl ${isActive ? 'tab-active' : ''} hover:bg-[#9538E2]`
                    }
                >
                    All
                </NavLink>
                {categories
                    .filter(category => category.category !== 'All')
                    .map(category => (
                        <NavLink
                            key={category.category}
                            to={`/category/${category.category}`}
                            role='tab'
                            className={({ isActive }) =>
                                `btn text-2xl font-thin rounded-xl ${isActive ? 'tab-active' : ''} hover:bg-[#9538E2]`
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
