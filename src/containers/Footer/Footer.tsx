import './footer.scss'

export const Footer = () => {
  return (
    <footer className="footer">
        <div>
            <ul id="icono" className="footer__listado">
                <a className="footer__listado footer__icono " href="https://www.linkedin.com/in/santiago-homps/" target="blank">
                    <i className="devicon-linkedin-plain"></i>
                </a>
                <a className="footer__listado footer__icono " href="https://github.com/Frukostman/" target="blank">
                    <i className="devicon-github-original"></i>
                </a>
                <a className="footer__listado footer__icono " href="https://www.behance.net/santiagohomps" target="blank">
                <i className="devicon-behance-plain"></i>
                </a>              
            </ul>
            <h3 className="footer__titulo">Copyright © 2021 &nbsp; | &nbsp; by&nbsp; <i> Santiago Homps </i></h3>
        </div>
    </footer>
  )
}
