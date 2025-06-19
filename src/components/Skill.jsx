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
import SkillCard from './SkillCard'

const skillItem = [
    {
      imgSrc: nextjs,
      label: 'Next.JS',
      desc: 'Full-Stack Framework'
    },
    {
      imgSrc: nodejs,
      label: 'Node.JS',
      desc: 'JavaScript Backend'
    },
    {
      imgSrc: react,
      label: 'React',
      desc: 'JavaScript Library'
    },
    {
      imgSrc: tailwindcss,
      label: 'TailwindCSS',
      desc: 'Utility-First Framework'
    },
    {
      imgSrc: javascript,
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: typescript,
      label: 'TypeScript',
      desc: 'Type-Safety'
    },
    {
      imgSrc: expressjs,
      label: 'Express',
      desc: 'Backend Framework'
    },
    {
      imgSrc: postgresql,
      label: 'PostgreSQL',
      desc: 'Relational Database'
    },
    {
      imgSrc: html,
      label: 'HTML',
      desc: 'Structure & Content'
    },
    {
      imgSrc: css3,
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: figma,
      label: 'Figma',
      desc: 'Design tool'
    },
    {
      imgSrc: vscode,
      label: 'Visual Studio Code',
      desc: 'Code Editor'
    },
];

const Skill = () => {
  return (
    <section className='section'>
        <div className='container'>
            <h2 className='headline-2 reveal-up'>
                Essential Tools & Technologies I use
            </h2>

            <p className='text-zinc-400 mt-3 mb-8 max-w-[50ch]'>
            Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
            </p>

            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {
                    skillItem.map(({ imgSrc, label, desc }, key) => (

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
