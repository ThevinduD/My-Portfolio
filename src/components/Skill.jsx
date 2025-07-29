import css3 from '/src/assets/skillTree/css3.svg'
import html from '/src/assets/skillTree/html.svg'
import figma from '/src/assets/skillTree/figma.svg'
import javascript from '/src/assets/skillTree/javascript.svg'
import typescript from '/src/assets/skillTree/typescript.svg'
import react from '/src/assets/skillTree/react.svg'
import tailwindcss from '/src/assets/skillTree/tailwindcss.svg'
import vscode from '/src/assets/skillTree/vscode.svg'
import postgresql from './../assets/skillTree/postgresql.png';
import nextjs from '/src/assets/skillTree/nextjs.svg'
import nodejs from './../assets/skillTree/node2.png';
import expressjs from './../assets/skillTree/expressjs.png';
import mongodb from './../assets/skillTree/mongodb.png';
import postman from './../assets/skillTree/postman.png';
import intelliJ from './../assets/skillTree/intelliJ.png';
import photoshop from './../assets/skillTree/photoshop.png';
import canva from './../assets/skillTree/canva.png';
import SkillCard from './SkillCard'

const skillItem = [
    {
      imgSrc: nextjs,
      label: 'Next.JS',
      desc: 'Full-Stack Framework',
      category: 'Tech'
    },
    {
      imgSrc: nodejs,
      label: 'Node.JS',
      desc: 'JavaScript Backend',
      category: 'Tech'
    },
    {
      imgSrc: react,
      label: 'React',
      desc: 'JavaScript Library',
      category: 'Tech'
    },
    {
      imgSrc: tailwindcss,
      label: 'TailwindCSS',
      desc: 'Utility-First Framework',
      category: 'Tech'
    },
    {
      imgSrc: javascript,
      label: 'JavaScript',
      desc: 'Interaction',
      category: 'Tech'
    },
    {
      imgSrc: typescript,
      label: 'TypeScript',
      desc: 'Type-Safety',
      category: 'Tech'
    },
    {
      imgSrc: expressjs,
      label: 'Express',
      desc: 'Backend Framework',
      category: 'Tech'
    },
    {
      imgSrc: postgresql,
      label: 'PostgreSQL',
      desc: 'Relational Database',
      category: 'Tech'
    },
    {
      imgSrc: mongodb,
      label: 'MongoDB',
      desc: 'NoSQL database',
      category: 'Tech'
    },
    {
      imgSrc: html,
      label: 'HTML',
      desc: 'Structure & Content',
      category: 'Tech'
    },
    {
      imgSrc: css3,
      label: 'CSS',
      desc: 'User Interface',
      category: 'Tech'
    },
    {
      imgSrc: figma,
      label: 'Figma',
      desc: 'Design tool',
      category: 'Design'
    },
    {
      imgSrc: canva,
      label: 'Canva',
      desc: 'Design tool',
      category: 'Design'
    },
    {
      imgSrc: photoshop,
      label: 'Photoshop',
      desc: 'Image Editor',
      category: 'Design'
    },
    {
      imgSrc: vscode,
      label: 'Visual Studio Code',
      desc: 'Code Editor',
      category: 'Dev'
    },
    {
      imgSrc: intelliJ,
      label: 'IntelliJ IDEA',
      desc: 'Code Editor',
      category: 'Dev'
    },
    {
      imgSrc: postman,
      label: 'Postman',
      desc: 'API testing tool',
      category: 'Dev'
    },
];

const Skill = () => {
  return (
    <section className='section'>
        <div className='container'>
            <h2 className='headline-2 reveal-up'>
                Essential Tools & Technologies I use
            </h2>

            <p className='text-zinc-400 mt-3 max-w-[50ch]'>
            Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
            </p>

            <p className='mt-12 headline-3 reveal-up mb-5'>Technologies</p>
            
            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {
                    skillItem.filter(({ category }) => category === "Tech").map(({ imgSrc, label, desc }, key) => (

                        <SkillCard
                            key={key}
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                            classes="reveal-up"
                        />
                    ))
                }
            </div>

            <p className='mt-12 headline-3 reveal-up mb-5'>Development Tools</p>
            
            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {
                    skillItem.filter(({ category }) => category === "Dev").map(({ imgSrc, label, desc }, key) => (

                        <SkillCard
                            key={key}
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                            classes="reveal-up"
                        />
                    ))
                }
            </div>

            <p className='mt-12 headline-3 reveal-up mb-5'>Design Tools</p>
            
            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {
                    skillItem.filter(({ category }) => category === "Design").map(({ imgSrc, label, desc }, key) => (

                        <SkillCard
                            key={key}
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                            classes="reveal-up"
                        />
                    ))
                }
            </div>

        </div>
    </section>
  )
}

export default Skill
