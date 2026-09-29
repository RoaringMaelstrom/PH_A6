import Logo from "../../assets/logo.png"
import Image from "next/image";

const Footer = () => {
    return (
        <div className="footer footer-horizontal flex justify-between border-t-2 border-gray-400/20 px-6 lg:px-12 py-6">

            <div className="flex gap-3 items-center font-extrabold">
                <Image
                    src={Logo}
                    alt="Site Logo"
                    className="object-contain rotate-135" />
                FITLOG
            </div>
            <div className="flex flex-col md:flex-row">
                <span>© 2026 FitLog — Workout Library.</span>
                <span>Train hard, log honest.</span>
            </div>
        </div>
    );
};

export default Footer;