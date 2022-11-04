import { Skill } from '../Skill/Skill';
import { Title } from '../Title/Title';

import skills from '../../../src/assets/DB/skillsDB.json'

skills.sort(() => 0.5 - Math.random());

import './skillList.scss'

export const SkillList = () => {
  return (
    <section id="skills" className="skills">
        <div className="circle"></div>
        <Title text="SKILLS" titleColor='White' rectangleColor='BGC_Light'/>
        <ul className="skills_list">
            {
                skills.map((skill) => {
                    return (
                        <Skill key={skill.id} skillLogo={skill.logo} skillName={skill.name} skillLevel={skill.level}/>
                    )
                })
            }
        </ul>
    </section>
  )
}
