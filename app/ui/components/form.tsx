import { MainButton } from './buttons';
import clsx from 'clsx';

const style: string = `rounded-lg p-2 w-full bg-backgroundSecondary border-1 border-[#2c2b2b] active:border-hilight active:outline-none focus:outline-none focus:border-hilight focus:shadow-[0px_0px_20px_-4px_#DDFF00] transition-all duration-600`;

const Forma = () => {
    return (
        <main>
            <form className=''>
                <label className='text-textSecondary mt-3 block' htmlFor='name'>
                    {' '}
                    Your name
                    <input
                        type='text'
                        id='name'
                        placeholder='John Doe'
                        className=' rounded-lg p-2 w-full bg-backgroundSecondary border-1 border-[#2c2b2b] active:border-hilight active:outline-none focus:outline-none focus:border-hilight focus:shadow-[0px_0px_20px_-4px_#DDFF00] '
                    />
                </label>
                <label
                    className='text-textSecondary mt-3 block'
                    htmlFor='email'>
                    {' '}
                    Email
                    <input
                        type='email'
                        id='email'
                        placeholder='example@example.com'
                        className={style}
                    />
                </label>
                <label className='text-textSecondary mt-3 block' htmlFor='text'>
                    {' '}
                    Message
                    <textarea
                        id='text'
                        placeholder='If you wish...'
                        className={style}
                        rows={4}
                    />
                </label>
                <MainButton title='Submit' link='#' />
            </form>
        </main>
    );
};

export default Forma;
