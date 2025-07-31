'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function NavLinks() {
    const pathname = usePathname();

    const links = [
        { name: 'Home', href: '/' },
        {
            name: 'Work',
            href: '#mains',
        },
        {
            name: 'Experience',
            href: '#',
        },
        {
            name: 'Skills',
            href: '#',
        },
        {
            name: 'Contact',
            href: '#',
        },
    ];

    return (
        <>
            {links.map((link) => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            `block w-fit p-3 font-medium hover:text-hilight hover:translate-x-3 duration-400 ease-in-out justify-start`,
                            {
                                ' text-hilight': pathname === link.href,
                            }
                        )}>
                        <div>
                            <p className='relative before:border-1 before:absolute before:w-3 before:top-[50%] before:-left-4'>
                                {link.name}
                            </p>
                        </div>
                    </Link>
                );
            })}
        </>
    );
}
