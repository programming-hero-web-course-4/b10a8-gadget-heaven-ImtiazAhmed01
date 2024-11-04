import './navbar.css'

const Navbar = () => {
    return (
        <div>
            <div className="bg-[#9538E2] m-7 rounded-xl text-white pb-56">
                <div className="navbar px-32 py-7">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li><a>Home</a></li>
                                <li>
                                    <a>Statics</a>

                                </li>
                                <li><a>Dashboard</a></li>
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-xl">Gadget Hell</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><a>Home</a></li>
                            <li>
                                <a>Statics</a>
                            </li>
                            <li><a>Dashboard</a></li>
                        </ul>
                    </div>
                    <div className="navbar-end gap-4">
                        <button class="btn btn-circle hidden lg:block pl-3 drop-shadow-2xl rounded-full border">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                        <div tabindex="0" role="button"
                            class="btn btn-circle hidden lg:block pt-2.5 drop-shadow-2xl rounded-full border">
                            <div class="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="text-5xl  font-bold mt-28 mb-4">Upgrade Your Tech Accessorize with Gadget <br />Hell Accessories</h1>
                    <p>Explore the latest gadgets that will take your experience to the next level. From smart <br />devices to the coolest accessories, we have it all!</p>
                    <div className="btn text-[#9538E2] rounded-full px-5 mt-3 mb-16 font-bold">Shop Now</div>
                </div>

            </div>
            <div className='Newsletter'>
                <div className='text-center pt-28 pb-20'>



                </div>
            </div>
        </div>
    );
};

export default Navbar;