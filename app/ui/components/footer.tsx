import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className='relative text-center md:text-left mt-35 mb-20'>
            <div>
                <h2 className='text-3xl '>Ivan Ishchenko</h2>
                <div className='border-1 border-hilight rounded-2xl inline-block w-15 align-middle my-5'></div>
                <p className='uppercase '>Full Stack Developer</p>
            </div>
            <div className='mt-25 md:flex gap-25'>
                <div>
                    <h3 className='uppercase text-textSecondary my-5'>
                        Navigation
                    </h3>
                    <nav>
                        <ul>
                            <li className='py-2'>
                                <Link href='/'>Home</Link>
                            </li>
                            <li className='py-2'>
                                <Link href='/form'>Contacts</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <h3 className='uppercase text-textSecondary my-5'>
                        Social Media
                    </h3>
                    <nav>
                        <ul>
                            <li className='py-2'>
                                <a href='https://github.com/DoctorDevTool'>
                                    GitHub
                                </a>
                            </li>
                            <li className='py-2'>
                                <a href='https://www.linkedin.com/in/ivan-ishchenko-6a24b2108/'>
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
