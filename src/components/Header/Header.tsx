import './header.scss'

import image from '../../../public/images/avatar.jpeg'


export const Header = () => {
  return (
    <header className="intro">
        <div className="header">
            {/* <img src={`${process.env.PUBLIC_URL}src/assets/images/avatar.jpeg`} alt="avatar" className="img-fluid image"/> */}
            <img src={image} alt="avatar" className="header__avatar img-fluid image"/>
            <div className="header__info">
                <h1 className="header__info title">SANTIAGO <br></br><strong>HOMPS</strong></h1>
                <p className="header__info data">Front-end developer</p>
            </div>
        </div>
        <a className="down" href="#about">
            &#9660;
        </a>
    </header>
  )
}
