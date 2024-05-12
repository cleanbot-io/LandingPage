"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function NavBar()
{
    const [navbar, setNavbar] = useState(false);

    return(
        <nav className="w-full bg-white fixed top-0 left-0 right-0 z-10">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        {/* LOGO */}
                        <Link href="/">
                            <Image src="/dalle.png" width={40} height={40} alt="logo" />
                        </Link>
                        {/* HAMBURGER BUTTON */}
                        <div className="md:hidden">
                            <button
                            className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                            onClick={() => setNavbar(!navbar)}
                            >
                            {navbar ? (
                                <Image src="/close.png" width={30} height={30} alt="logo" />
                            ) : (
                                <Image
                                src="/hamburger_icon.png"
                                width={30}
                                height={30}
                                className="focus:border-none active:border-none"
                                />
                            )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'}`}>
                        <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                            <li className="pb-3 text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-blue-300  border-blue-300  md:hover:text-blue-300 md:hover:bg-transparent">
                            <Link href="/subscription" onClick={() => setNavbar(!navbar)}>
                                Subscription
                            </Link>
                            </li>
                            <li className="pb-3 text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-blue-300  border-blue-300  md:hover:text-blue-300 md:hover:bg-transparent">
                            <Link href="/cleaners" onClick={() => setNavbar(!navbar)}>
                                Cleaners
                            </Link>
                            </li>
                            <li className="pb-3 text-xl text-black py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-blue-300  border-blue-300  md:hover:text-blue-300 md:hover:bg-transparent">
                            <Link href="/about" onClick={() => setNavbar(!navbar)}>
                                About
                            </Link>
                            </li>
                            <li className="pb-3 text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-blue-300  border-blue-300  md:hover:text-blue-300 md:hover:bg-transparent">
                            <Link href="/roadmap" onClick={() => setNavbar(!navbar)}>
                                Roadmap
                            </Link>
                            </li>
                            <li className="pb-3 text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-blue-300  border-blue-300  md:hover:text-blue-300 md:hover:bg-transparent">
                            <Link href="/investors" onClick={() => setNavbar(!navbar)}>
                                Investors
                            </Link>
                            </li>
                            <li className="pb-3 text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-blue-300  border-blue-300  md:hover:text-blue-300 md:hover:bg-transparent">
                            <Link href="/blogs" onClick={() => setNavbar(!navbar)}>
                                Blog
                            </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;