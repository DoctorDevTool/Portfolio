import '@/ui/globals.css';
import { poppins } from './ui/fonts';
import SideNav from './ui/components/navigations/sidenavs';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' className='scroll-smooth'>
            <body
                className={`${poppins.className} antialiased overflow-y-auto`}>
                <div className='flex min-h-screen flex-col md:flex-row'>
                    <div className='relative'>
                        <div className='fixed z-50 w-full  mt-8 md:w-64 overflow-hidden'>
                            <SideNav />
                        </div>
                    </div>
                    <div className='flex-grow p-6 md:p-12 mt-10 md:mt-0 md:ml-60'>
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
