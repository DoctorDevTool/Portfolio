'use client';

import NavLinks from './nav-links';
import { manrope } from './fonts';
import { useState } from 'react';

export default function SideNav() {
    const [isOpen, setIsOpen] = useState(false);

    const activator = () => setIsOpen(!isOpen);

    return (
        <nav className='fixed md:contents top-0 left-0 w-full z-50 bg-background'>
            <div className='flex flex-row md:flex-col justify-between md:justify-start items-center md:items-start my-4 mx-6'>
                <a href='/' className='md:mx-3 mx-2 w-fit'>
                    <div className={`${manrope.className} uppercase`}>
                        <p>Ivan Ishchenko</p>
                    </div>
                </a>
                <div className='md:hidden'>
                    <button onClick={activator}>
                        <svg
                            className='inline-block h-8 w-8'
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

                <div className='hidden relative mt-40 before:absolute before:bg-background before:w-7 before:h-full before:z-10 before:-left-5 md:block'>
                    <NavLinks />
                </div>
            </div>
            {isOpen && (
                <div className=' md:hidden h-screen'>
                    <ul
                        onClick={activator}
                        className=' space-y-4 px-6 ml-2 w-fit'>
                        <li>
                            <a href='#'>Home</a>
                        </li>
                        <li>
                            <a href='#mains'>Work</a>
                        </li>
                        <li>
                            <a href='#'>Experience</a>
                        </li>
                        <li>
                            <a href='#'>Skills</a>
                        </li>
                        <li>
                            <a href='#'>Contacts</a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
