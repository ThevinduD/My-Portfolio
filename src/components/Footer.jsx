import { ButtonPrimary } from "./Button";
import Logo from './../assets/Logo.png';

const sitemap = [
    {
      label: 'Home',
      href: '#home'
    },
    {
      label: 'About',
      href: '#about'
    },
    {
      label: 'Work',
      href: '#work'
    },
    // {
    //   label: 'Reviews',
    //   href: '#reviews'
    // },
    {
      label: 'Contact me',
      href: '#contact'
    }
];
  
const socials = [
    {
      label: 'GitHub',
      href: 'https://www.github.com/ThevinduD'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/thevindu-dehigaspitiya/'
    },  
    {
      label: 'HackerRank',
      href: 'https://www.hackerrank.com/profile/thevindud_work'
    }
];

const Footer = () => {
  return (
    <footer className="section">
        <div className="container">

            <div className="lg:grid lg:grid-cols-2">
              
                <div className="mb-10">
                    <h2 className="headline-1 mb-8 max-w-[12ch]">
                        Let&apos;s work together today!
                    </h2>
                    <ButtonPrimary
                        href="mailto:thevindud.work@gmail.com"
                        label="Start project"
                        icon="chevron_right"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4 lg:pl-20">

                  <div>
                    <p className="mb-2">Sitemap</p>

                    <ul>
                      {
                        sitemap.map(({ label, href }, key) => (
                          <li key={key}>
                            <a 
                              href={href}
                              className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                            >
                              {label}
                            </a>
                          </li>
                        ))
                      }
                    </ul>
                  </div>

                  <div>
                    <p className="mb-2">Socials</p>

                    <ul>
                      {
                        socials.map(({ label, href }, key) => (
                          <li key={key}>
                            <a 
                              href={href}
                              target="_blank"
                              className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                            >
                              {label}
                            </a>
                          </li>
                        ))
                      }
                    </ul>
                  </div>

                </div>

            </div>

            <div className="flex items-center justify-between pt-10 pb-5">
              
              <img 
                  className="cursor-pointer"
                  src={Logo} 
                  width={40}
                  height={40}
                  alt="Thevindu D." 
              />
              

              <p className="text-zinc-500 text-sm">
                &copy; 2025 <span className="text-zinc-200">Digital creation by Thevindu D</span>
              </p>
            </div>

        </div>
    </footer>
  )
}

export default Footer
