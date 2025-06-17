import ProjectCard from './ProjectCard';
import project1 from './../assets/projects/project-1.png';
import project2 from './../assets/projects/project-2.png';
import project3 from './../assets/projects/project-3.png';

const works = [
    {
      imgSrc: project1,
      title: 'Invoice Management Dashboard',
      tags: ['Fullstack', 'Next.js'],
      projectLinks: {
        github: 'https://github.com/ThevinduD/NextJS-Dashboard',
        website: 'https://next-js-dashboard-three-pink.vercel.app/'
      }
    },
    {
      imgSrc: project2,
      title: 'Smart Pitch Startup Platform',
      tags: ['Fullstack', 'Next.js'],
      projectLinks: {
        github: 'https://github.com/ThevinduD/YC_Directory-Pitch-Startup',
        website: 'https://yc-directory-pitch-startup.vercel.app/'
      }
    },
    {
      imgSrc: project3,
      title: 'Travel Booking & Adventure Hub',
      tags: ['Frontend', 'React.js'],
      projectLinks: {
        github: 'https://github.com/ThevinduD/Travel-With-Thevindu',
        website: 'https://travel-with-thevindu.netlify.app/'
      }
    },

];

const Work = () => {
  return (
      <section 
        id='work'
        className="section"
      >
        <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">
                My Showcase
            </h2>

            <div className="grid gap-x-6 gap-y-7 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {
                    works.map(({imgSrc,title,tags,projectLinks} , key) => (
                        <ProjectCard
                          key={key}
                          imgSrc={imgSrc}
                          title={title}
                          tags={tags}
                          projectLinks={projectLinks}
                          classes="reveal-up"
                        />
                    ))
                }
            </div>
        </div>
      </section>
  )
}

export default Work
