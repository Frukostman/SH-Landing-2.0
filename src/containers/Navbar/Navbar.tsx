import './navbar.scss'


export const Navbar = () => {
  return (
    <nav className="navbar sticky-top" id="navbar">
        <a className="navbar__link" href="#about">ABOUT</a>
        <a className="navbar__link" href="#skills">SKILLS</a>
        <a className="navbar__link" href="#portfolio">PORTFOLIO</a>
        <a className="navbar__link" href="#contact">CONTACT</a>
    </nav>
  )
}
