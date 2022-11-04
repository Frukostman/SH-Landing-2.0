import { Project } from '../Project/Project';
import { Title } from '../Title/Title';

import projects from '../../assets/DB/projects.json'
// import projects from '../../../public/DB/projects.json'

import './portfolio.scss'

export const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
        <Title text="PORTFOLIO" titleColor='Dark' rectangleColor='BGC_Light'/>
        <ul>
            {projects.map((project) => {
                return (
                    <Project key={project.id} project={project} />
                )
            })}
        </ul>
    </section>
  )
}
