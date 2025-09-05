const Footer = () => {
    return (
        <footer className='text-center mt-35'>
            <div>
                <h2 className='text-3xl '>Ivan Ishchenko</h2>
                <div className='border-1 border-hilight rounded-2xl inline-block w-15 align-middle'></div>
                <p className='uppercase '>Full Stack Developer</p>
            </div>
            <div>
                <nav>
                    <ul>
                        <li>
                            <a href=''>Home</a>
                        </li>
                        <li>
                            <a href=''>Blog</a>
                        </li>
                        <li>
                            <a href=''>Contacts</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
