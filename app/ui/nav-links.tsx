'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NavLinks() {
    const [activeHref, setActiveHref] = useState('');

    const links = [
        { name: 'Home', href: '#home' },
        { name: 'Work', href: '#mains' },
        { name: 'Experience', href: '#experience' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    useEffect(() => {
        const handleIntersections = (entries: IntersectionObserverEntry[]) => {
            const visibleSections = entries
                .filter((entry) => entry.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio); // most visible first

            if (visibleSections.length > 0) {
                const mostVisible = visibleSections[0];
                setActiveHref(`#${mostVisible.target.id}`);
            }
        };

        const observer = new IntersectionObserver(handleIntersections, {
            root: null,
            rootMargin: '0px',
            threshold: [0.25, 0.5, 0.75], // multiple steps
        });

        links.forEach((link) => {
            const section = document.querySelector(link.href);
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            {links.map((link) => {
                const isActive = activeHref === link.href;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        scroll={true}
                        className={clsx(
                            `block w-fit p-3 font-medium transition-all duration-300 hover:text-hilight hover:translate-x-3`,
                            {
                                'text-hilight': isActive,
                            }
                        )}>
                        <p className='relative before:border-1 before:absolute before:w-3 before:top-[50%] before:-left-4'>
                            {link.name}
                        </p>
                    </Link>
                );
            })}
        </>
    );
}
