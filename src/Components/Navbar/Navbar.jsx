import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const isDashboardOrStatistics = location.pathname === '/dashboard' || location.pathname === '/statistics';

    return (
        <div>
            <div className={`m-7 rounded-xl text-white ${isDashboardOrStatistics ? 'bg-white text-black' : 'bg-[#9538E2]'}`}>
                <div className="navbar px-32 py-7">
                    <div className="navbar-start">
                        <div className='dropdown'>
                            <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='h-5 w-5'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M4 6h16M4 12h8m-8 6h16'
                                    />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'
                            >
                                <NavLink
                                    className={({ isActive }) =>
                                        `font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`
                                    }
                                    to='/'
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) =>
                                        `font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`
                                    }
                                    to='/coffees'
                                >
                                    Coffees
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) =>
                                        `font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`
                                    }
                                    to='/dashboard'
                                >
                                    Dashboard
                                </NavLink>
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-xl">Gadget Hell</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-5">
                            <NavLink
                                className={({ isActive }) =>
                                    `font-bold ${isActive
                                        ? isDashboardOrStatistics ? 'text-[#9538E2]' : 'text-white'
                                        : isDashboardOrStatistics ? 'text-black' : 'text-white'
                                    }`
                                }
                                to='/'
                            >
                                Home
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    `font-bold ${isActive
                                        ? isDashboardOrStatistics ? 'text-[#9538E2]' : 'text-white'
                                        : isDashboardOrStatistics ? 'text-black' : 'text-white'
                                    }`
                                }
                                to='/statistics'
                            >
                                Statistics
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    `font-bold ${isActive
                                        ? isDashboardOrStatistics ? 'text-[#9538E2]' : 'text-white'
                                        : isDashboardOrStatistics ? 'text-black' : 'text-white'
                                    }`
                                }
                                to='/dashboard'
                            >
                                Dashboard
                            </NavLink>
                        </ul>
                    </div>
                    <div className="navbar-end gap-4">
                        <button className="btn btn-circle hidden lg:block pl-3 drop-shadow-2xl rounded-full border">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                        <div tabIndex="0" role="button"
                            className="btn btn-circle hidden lg:block pt-2.5 drop-shadow-2xl rounded-full border">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Navbar;
