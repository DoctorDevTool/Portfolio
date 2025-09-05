import Footer from '@/ui/components/footer';
import Forma from '@/ui/components/form';
import StatusBar from '@/ui/components/statusBar';
import NextForm from 'next/form';

export default function Form() {
    return (
        <>
            <div className='container mx-auto mt-40'>
                <div id='intro' className='scroll-mt-40'>
                    <StatusBar />
                    <p className=' text-3xl font-medium leading-10 my-5'>
                        Reach out to me and I'll get back to you in 48 hours
                    </p>
                </div>
                <div>
                    <Forma />
                </div>
                <Footer />
            </div>
        </>
    );
}
