import hero from './../assets/Thevindu2.webp';
import { ButtonPrimary, ButtonOutline } from './Button';
import smallImg from './../assets/smallimg.jpg';
import cv from './../assets/Thevindu-Dehigaspitiya-FullStack-Developer.pdf';

const Hero = () => { 
  return (
    <section
        id='home'
        className='pt-[105px]'
    >
        <div className='container lg:grid lg:grid-cols-2 items-center lg:gap-10'>

            <div>
                <div className='flex items-center gap-1 text-sm text-zinc-400 mb-4'>
                    <span className='material-symbols-rounded text-[16px]'> <a href="https://www.bing.com/maps?&ty=30&q=Colombo%2C%20Western%20Province%2C%20Sri%20Lanka&satid=id.sid%3A08e9be7d-e270-ec32-540a-0cfd91c3f88d&vdpid=7486434407729856514&mb=6.981369~79.760983~6.862626~79.949482&cardbg=%23F98745&tt=Colombo%2C%20Western%20Province%2C%20Sri%20Lanka&tsts0=%2526ty%253D30%2526q%253DColombo%25252C%252520Western%252520Province%25252C%252520Sri%252520Lanka%2526satid%253Did.sid%25253A08e9be7d-e270-ec32-540a-0cfd91c3f88d%2526vdpid%253D7486434407729856514%2526mb%253D6.981369~79.760983~6.862626~79.949482%2526cardbg%253D%252523F98745&tstt0=Colombo%2C%20Western%20Province%2C%20Sri%20Lanka&cp=6.922026~79.801102&lvl=12.65077&pi=0&ftst=0&ftics=False&v=2&sV=2&form=S00027" target='_blank'>location_on</a></span>

                    <p><a href="https://www.bing.com/maps?&ty=30&q=Colombo%2C%20Western%20Province%2C%20Sri%20Lanka&satid=id.sid%3A08e9be7d-e270-ec32-540a-0cfd91c3f88d&vdpid=7486434407729856514&mb=6.981369~79.760983~6.862626~79.949482&cardbg=%23F98745&tt=Colombo%2C%20Western%20Province%2C%20Sri%20Lanka&tsts0=%2526ty%253D30%2526q%253DColombo%25252C%252520Western%252520Province%25252C%252520Sri%252520Lanka%2526satid%253Did.sid%25253A08e9be7d-e270-ec32-540a-0cfd91c3f88d%2526vdpid%253D7486434407729856514%2526mb%253D6.981369~79.760983~6.862626~79.949482%2526cardbg%253D%252523F98745&tstt0=Colombo%2C%20Western%20Province%2C%20Sri%20Lanka&cp=6.922026~79.801102&lvl=12.65077&pi=0&ftst=0&ftics=False&v=2&sV=2&form=S00027" target='_blank'>Colombo, Sri Lanka</a></p>
                    
                </div>
                
                <div className='flex items-center gap-3'>
                    <figure className='img-box w-9 h-9 rounded-lg'>
                        <img 
                            src={smallImg}
                            width={40}
                            height={40}
                            className='img-cover'
                        />
                    </figure>

                    <div className='flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide'>
                        <span className='relative w-2 h-2 rounded-full bg-emerald-400'>
                            <span className='absolute inset-0 rounded-full bg-emerald-400 animate-ping'></span>
                        </span>

                        Available for work
                    </div>
                </div>

                <h2 className='headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10'>
                    Building Scalable Modern Websites for the Future
                </h2>

                <div className='flex items-center gap-3'>
                    <a href={cv} download="Thevindu_Dehigaspitiya_CV.pdf">
                        <ButtonPrimary
                            label="Download CV"
                            icon="download"
                        />
                    </a>
                    <ButtonOutline
                        href="#about"
                        label="Scroll down"
                        icon="arrow_downward"
                    />
                </div>

            </div>

            <div className='mt-10 lg:mt-0'>
                <figure className='w-full max-w-[490px] mx-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden'>
                    <img 
                        src={hero}
                        width={650}
                        height={700}
                        className='w-[100%]'
                    />
                </figure>
            </div>

        </div>

    </section>
  )
}

export default Hero
