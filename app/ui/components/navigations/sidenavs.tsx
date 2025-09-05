'use client';

import NavLinks from './nav-links';
import { manrope } from '../../fonts';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function SideNav() {
    const [isOpen, setIsOpen] = useState(false);

    const activator = () => setIsOpen((prev) => !prev);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isOpen]);

    return (
        <nav className='fixed md:contents top-0 left-0 w-full z-50 bg-background'>
            <div className='flex flex-row md:flex-col justify-between md:justify-start items-center md:items-start my-4 mx-6'>
                <Link href='/' className='md:mx-3 mx-2 w-fit z-40'>
                    <div
                        className={`${manrope.className} uppercase tracking-wider`}>
                        <p>Ivan Ishchenko</p>
                    </div>
                </Link>

                {/* Hamburger */}
                <div className='md:hidden z-40'>
                    <button onClick={activator}>
                        <svg
                            className='h-8 w-8'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='#FFFFFF'>
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d={
                                    isOpen
                                        ? 'M6 18L18 6M6 6l12 12'
                                        : 'M4 6h16M4 12h16M4 18h16'
                                }
                            />
                        </svg>
                    </button>
                </div>

                {/* Desktop nav */}
                <div className='hidden relative mt-40 before:absolute before:bg-background before:w-7 before:h-full before:z-10 before:-left-5 md:block'>
                    <NavLinks />
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className='fixed top-10 inset-0 bg-background p-6 md:hidden overflow-y-auto'>
                    <NavLinks onClick={activator} />
                </div>
            )}
        </nav>
    );
}
