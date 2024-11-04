

const Footer = () => {
    return (
        <footer className="bg-white box-border pt-20 px-44">
            <div className="text-center py-10">
                <h1 className="text-5xl font-bold pb-3">Gadget Hell</h1>
                <p>Leading the way in the cutting-edge technology and innovation</p>
            </div>
            <hr className="py-5" />
            <div className="footer text-center">
                <nav>
                    <h6 className="font-bold">Services</h6>
                    <a className="link link-hover">Product Support</a>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover">Shipping & Delivery</a>
                    <a className="link link-hover">Returns</a>
                </nav>
                <nav>
                    <h6 className="font-bold">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <h6 className="font-bold">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;