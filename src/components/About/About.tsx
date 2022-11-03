import { Title } from '../Title/Title'

import './about.scss'

export const About = () => {
  return (
    <section id="about" className="about">
        <Title text="ABOUT" titleColor='Light' rectangleColor='BGC_Background'/>
        <p className="about_text">
            I'm a fresh <b>Front-end developer</b> taking his first steps into the Back-end side of life and on my way to becoming a <b>full-MERN-stack</b> developer. 
            <br></br>
            I am always enthusiastic about new programming challenges and getting the chance to learn a new skill.
            <br></br>
            I have a degree in Architecture and a strong interest in UX, design, and computer science. I started programming in <b>HTML, CSS, and Javascript</b> and learned <b>SASS, Bootstrap, Bulma, EJS, WordPress, React, Jest, Node.js, Express, Firebase, and MongoDB</b> along the way.
            <br></br>
            Native Spanish speaker but fluent in English and Portuguese as well. Swedish is next on the list.
        </p>
        <div className="about_button">
            <a 
                // href={`${process.env.PUBLIC_URL}/cv/CV - Santiago Homps 2021.pdf`} 
                target="blank"
            >
                Download Resume
            </a>
        </div>
    </section>
  )
}
