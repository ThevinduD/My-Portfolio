import {useState} from 'react'
import Logo from './../assets/Logo.png';
import Navbar from './Navbar';

const Header = () => {

    const [navOpen, setNavOpen] = useState(false)

  return (
    <header className='fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0'>
        <div className='xl:max-w-6xl 2xl:max-w-7xl max-w-screen-2xl w-full mx-auto px-5 flex  justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]'>
            <h1>
                <a href="#home" className='logo'>
                    <img src={Logo} width={40} height={40} alt="Thevindu D."/>
                </a>
            </h1>

            <div className='relative md:justify-self-center'>
                <button 
                    className='menu-btn md:hidden' 
                    onClick={() => setNavOpen(prev => !prev)}
                >
                    <span className='material-symbols-rounded'>
                        {navOpen ? 'close' : 'menu'}                      
                    </span>
                </button>

                <Navbar navOpen={navOpen}/>
            </div>

            <a
                href="#contact"
                className='btn btn-secondary max-md:hidden md:justify-self-end'
            >
                Contact Me
            </a>
        </div>
    </header>
  )
}

export default Header
