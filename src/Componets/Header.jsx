import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { Link as LinkRouter } from 'react-scroll/modules'
import Code from '../assets/icon.png'
export const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [animatedLinks, setAnimatedLinks] = useState('')
    const [animatedMenu, setAnimatedMenu] = useState(false)
    const links = [
        {id: 2, title: 'Sobre mí'},
        {id: 5, title: 'Experiencia'},
        {id: 1, title: 'Servicios'},
        {id: 4, title: 'Contacto'},
    ]
    const handleShowMenu = () => {
        setShowMenu(!showMenu)
        setAnimatedLinks('animated-text')

        setAnimatedMenu(!animatedMenu)
    }
    return (
        <div >

        <header className={`headerContainer ${animatedMenu? 'animated-menu': 'go-back-menu'}`}>
        <nav className="desktop">
            <LinkRouter smooth={true} duration={500} to={'/main'} className="logo pointer"><img src={Code} alt="code" /></LinkRouter>
            <ul className="links">
                {links && links.map(link =>(
                    <LinkRouter smooth={true} duration={500} to={`/${link.title.toLowerCase()}`} className="link pointer" key={link.id}>{link.title}</LinkRouter>
                ))}
            </ul>
        </nav>

        <nav className='mobile'>
            <div className="header-mobile">

            <LinkRouter smooth={true} duration={500} to={'/main'} className="  pointer logo"><img src={Code} alt="code" /></LinkRouter>
            <div onClick={handleShowMenu} className="menuIcon  pointer"><MenuIcon/></div>
            </div>
            {showMenu && <ul className={`links ${animatedLinks}`} >
                {links && links.map(link =>(
                     <LinkRouter smooth={true} duration={500} to={`/${link.title.toLowerCase()}`} className="link  pointer" key={link.id}>{link.title}</LinkRouter>
                ))}
            </ul>}
        </nav>
        </header>
    </div>        
    );
}