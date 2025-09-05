import { MainButton, SecondaryButton } from './ui/components/buttons';
import StatusBar from './ui/components/statusBar';
import Footer from './ui/components/footer';

export default function Home() {
    return (
        <div className='container mx-auto mt-40'>
            <div id='intro' className='scroll-mt-40'>
                <StatusBar />
                <h1 className='text-4xl font-medium leading-11 my-5'>
                    I turn idies into meaningfull design ideas that inspires.
                </h1>
                <div className='h-14 inline'>
                    <MainButton title='Get in touch' link='/form' />
                </div>
                <div className='h-14 inline'>
                    <SecondaryButton title='My work' link='#skills' />
                </div>
            </div>
            <div id='work' className='mt-30 scroll-mt-40'>
                distinctio totam animi eligendi esse facere dolore, aut
                doloremque? Alias soluta voluptates iste culpa natus
                perspiciatis, consequuntur nam odio quis facere, est tenetur
                obcaecati delectus omnis provident aut esse dolore? Officia,
                quibusdam.
            </div>
            <div id='experience' className='mt-30 scroll-mt-40'>
                quae, accusamus ratione provident aliquid veritatis debitis,
                doloribus voluptatum odio nihil. Laborum quos quo quaerat, minus
                quisquam doloribus rem explicabo est natus deserunt voluptate,
                tempore pariatur repudiandae?
            </div>
            <div id='skills' className='mt-30 scroll-mt-40'>
                iure nihil labore quod perspiciatis sapiente? Reiciendis
                asperiores delectus quas quae totam in assumenda vel magni
                voluptatibus aut non necessitatibus reprehenderit, dolorum
                ducimus perferendis? Expedita, a impedit? Natus ab eum, magni
                cum temporibus dolor distinctio quasi excepturi necessitatibus
                quae magnam expedita debitis molestiae sunt velit! Corrupti
            </div>
            <div id='contact' className='mt-30 scroll-mt-40'>
                perferendis, placeat tempora. Laboriosam facere neque nam
                nostrum accusamus, ut expedita odit unde. Inventore deleniti
                earum odit ipsam sit illum dolor ex officiis doloribus. Magni,
                Eum velit sunt odio veritatis, temporibus, necessitatibus
                numquam aliquid qui illo similique explicabo provident ab totam
                quia repudiandae beatae tempora commodi voluptatibus tenetur!
                Non sunt consequatur nostrum officiis placeat excepturi officia
                impedit. Repellat rerum exercitationem aliquam dolor ad.
            </div>
            <Footer />
        </div>
    );
}
