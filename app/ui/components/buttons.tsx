import { ButtonProps } from '@/lib/definitions';
import clsx from 'clsx';
import Link from 'next/link';

const sharedClasses = [
    'flex',
    'h-13',
    'hover:h-9.5',
    'w-full',
    'md:w-fit',
    'my-4',
    'px-4',
    'text-md',
    'items-center',
    'justify-center',
    'rounded-xl',
    'font-medium',
    'transition-all',
    'duration-600',
    'shadow-hilight shadow-[0px_0px_20px_-4px_#DDFF00]',
    'hover:shadow-[0px_0px_30px_-4px_#DDFF00]',
    'focus-visible:outline',
    'focus-visible:outline-offset-2',
    'focus-visible:outline-background',
    'active:bg-hilight',
    'aria-disabled:cursor-not-allowed',
    'aria-disabled:opacity-50',
    'cursor-pointer',
];

export function MainButton({ title, link }: ButtonProps) {
    return (
        <button className={clsx('bg-hilight text-background', sharedClasses)}>
            <Link href={link}>{title}</Link>
        </button>
    );
}
export function SecondaryButton({ title, link }: ButtonProps) {
    return (
        <button
            className={clsx(
                'bg-hilightSecondary text-hilight  ring-2 ring-hilight',
                sharedClasses
            )}>
            <Link href={link}>{title}</Link>
        </button>
    );
}
