import Link from "next/link";
import Logo from "../../assets/logo.png"
import Image from "next/image";
import { NavLinks } from "./NavLinks";

import PlanCounter from "./PlanCounter";
import SavedCounter from "./SavedCounter";

export default function Navbar() {
    return (
        <div className="max-lg:collapse lg:mb-12 lg:px-12 shadow-sm border-b-2 border-gray-400/20 w-full">
            <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
            <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
            <div className="collapse-title navbar">
                <div className="navbar-start">
                    <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
                        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <Link href="/" className="flex gap-3 items-center">
                        <Image
                            src={Logo}
                            alt="Site Logo"

                            className="object-contain"
                        />
                        <button className="font-extrabold">
                            FITLOG
                        </button>
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <NavLinks />
                    </ul>
                </div>

                <div className="navbar-end gap-7 flex pr-3">
                    <PlanCounter />
                    <SavedCounter />
                </div>
            </div>

            <div className="collapse-content lg:hidden z-1 menu">
                <NavLinks />
            </div>
        </div>
    );
};