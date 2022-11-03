
import './skill.scss'

interface Skill {
    skillLogo: string, 
    skillName: string, 
    skillLevel: number,
}


export const Skill = ({skillLogo='', skillName='Not found', skillLevel=5}) => {
  return (
    <li>
        <div className="item">
            <div className="skill">
                <i className={`skill__logo ${skillLogo}`}></i>
            </div>
            <div className="skill__info">
                <p>{skillName}</p>
            </div>
        </div>
    </li>
  )
}
