import { Poppins } from 'next/font/google';
import { Manrope } from 'next/font/google';
import { Plus_Jakarta_Sans } from 'next/font/google';

export const poppins = Poppins({
    weight: ['400', '500'],
    subsets: ['latin-ext'],
});
export const manrope = Manrope({
    weight: '800',
    subsets: ['latin'],
});
export const plus_jakarta = Plus_Jakarta_Sans({
    weight: '500',
    subsets: ['latin'],
});
