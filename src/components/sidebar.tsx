"use client"

import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => setIsOpen(false);

    return (
        <div className="relative my-auto">
            <div className="ml-auto">
                <button
                    className="bg-white hover:bg-white text-sky-800 font-bold py-2 px-4 rounded"
                    onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? (
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    )}
                </button>
            </div>
            <div
                className={`bg-white text-sky-800 fixed left-0 right-0 transition-all duration-300 z-10 ${isOpen ? 'h-[calc(auto-60px)]' : 'h-0 overflow-hidden'} top-[60px]`}>
                <div className="flex flex-col items-center gap-3 py-5 shadow-md shadow-neutral-500/15">
                    <div className="">
                        <Link href="/"
                            className="text-sky-800 hover:text-[#dea423]"
                            onClick={handleClose}>
                            Home
                        </Link>
                    </div>
                    <div className="">
                        <Link href="/aboutUsPage"
                            className="text-sky-800 hover:text-[#dea423]"
                            onClick={handleClose}>
                            About Us
                        </Link>
                    </div>
                    <div className="">
                        <Link href="/servicesPage"
                            className="text-sky-800 hover:text-[#dea423]"
                            onClick={handleClose}>
                            Products
                        </Link>
                    </div>
                    <div className="">
                        <Link href="/teamsPage"
                            className="text-sky-800 hover:text-[#dea423]"
                            onClick={handleClose}>
                            Teams
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};