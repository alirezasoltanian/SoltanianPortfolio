import React ,{useEffect} from 'react'
import CTA from './CTA'
import './header.css'
import Me from '../../assets/me31.png'
import HeaderSocials from './HeaderSocials'
import AOS from "aos";
import "aos/dist/aos.css";
const Header = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <header>
      <div className="container header__container">
        <h5 data-aos="zoom-in-down" data-aos-duration="1500" >Hello I'm</h5>
        <h1 data-aos="zoom-in-down" data-aos-duration="1500">Soltanian</h1>
        <h5 className="text-light"  data-aos="zoom-in-down" data-aos-duration="1000">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials /> 
        <div data-aos="zoom-in"  data-aos-easing="ease-out-cubic" data-aos-duration="1500"  className="me">
          <img src={Me} alt="" />
        </div >
        <a  href="#contact" className='scroll__down'>scroll Down</a>
      </div>
    </header>
  )
}

export default Header