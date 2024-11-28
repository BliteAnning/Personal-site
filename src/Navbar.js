import {Link} from 'react-scroll';
import wave from '../src/asset/wave.png';
import phone from '../src/asset/telephone.png';
import menu from '../src/asset/hamburger.png';
import { useState } from 'react';

const Navbar = () => {
    const [showMenu, setshowMenu] =useState(false);
    return (  
        <nav className="navbar">
            <img src= {wave} alt="" className="logo" />
            <div className="links">
              <Link activeClass="active" to='home-content' spy={true} offset={-100} smooth={true} duration={500} className="navlinks">Home</Link>
              <Link activeClass="active" to='skills' spy={true} offset={-50} smooth={true} duration={500} className="navlinks">About</Link>
              <Link activeClass="active" to='project' spy={true} offset={-50} smooth={true} duration={500} className="navlinks">Portfolio</Link>
              <Link activeClass="active" to='jobs' spy={true} offset={-50} smooth={true} duration={500} className="navlinks">Clients</Link>
            </div>
            <button className="contact" onClick={()=>{
                document.getElementById('contact').scrollIntoView({behavior: "smooth"})
            }}>
                <img src={phone} alt="" className="contact-icon" />Contact me
            </button>
            <img src= {menu} alt="" className="mobMenu" onClick={()=>setshowMenu(!showMenu)}/>
            <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
              <Link activeClass="active" to='home-content' spy={true} offset={-100} smooth={true} duration={500} className="navlink" onClick={()=>setshowMenu(false)}>Home</Link>
              <Link activeClass="active" to='skills' spy={true} offset={-50} smooth={true} duration={500} className="navlink" onClick={()=>setshowMenu(false)}>About</Link>
              <Link activeClass="active" to='project' spy={true} offset={-50} smooth={true} duration={500} className="navlink" onClick={()=>setshowMenu(false)}>Portfolio</Link>
              <Link activeClass="active" to='jobs' spy={true} offset={-50} smooth={true} duration={500} className="navlink" onClick={()=>setshowMenu(false)}>Clients</Link>
              <Link activeClass="active" to='contact' spy={true} offset={-50} smooth={true} duration={500} className="navlink" onClick={()=>setshowMenu(false)}>contact</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;