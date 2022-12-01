import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { SideBar } from "./sidebar/SideBar"
import './Home.scss';
import terapeuta from '../images/terapeuta.png'
import profile from '../images/profile.jpeg'
import Footer from "./footer/Footer";


const Home = () => {

    useEffect(() => {AOS.init({duration: 2000})}, [])

    return (
        <div className='home'>
            <SideBar />
            <h1 className='home-title' data-aos='fade-up'>Welcome</h1>
            <p className='home-p1' data-aos='fade-up'> 
                Mi nombre es Alex y es un placer tenerte por mi sitio 😊
                Soy Psicólogo y Software Developer de Argentina 🇦🇷
                He hecho yo mismo este sitio web para recibirte 🙌🏼
            </p>
            <div className='professions' data-aos='fade-up'>
                <img className='sticker' src={terapeuta} alt="psicologo" />
            </div>
            <h1 className='home-title' data-aos='fade-up'>Sobre mí</h1>
            <p className='home-p1' data-aos='fade-up'>
                Licenciado en Psicología (Universidad Nacional de Córdoba, Argentina), especialista en Psicoterapia Cognitivo Conductual 🧠
                Breve y Focalizada. Trabajo actualmente realizando Psicoterapia Online 💻 
                Tuve la suerte de experimentar vivir en culturas diferentes, lo que me brindó
                el aprendizaje y la posibilidad de trabajar con personas de diferentes partes del mundo 🌍

            </p>
            <span className='home-p1' data-aos='fade-up'>Entre ellas, personas de : </span>
            <ul className='flag-container' data-aos='fade-up'>
                <li className='flag'>🇦🇷</li>
                <li className='flag'>🇨🇴</li>
                <li className='flag'>🇨🇱</li>
                <li className='flag'>🇪🇸</li>
                <li className='flag'>🇻🇪</li>
                <li className='flag'>🇺🇸</li>
                <li className='flag'>🇵🇪</li>
                <li className='flag'>🇵🇷</li>
                <li className='flag'>🇵🇾</li>
                <li className='flag'>🇲🇽</li>
            </ul>
            <a href="https://api.whatsapp.com/send?phone=5491123763974&text=Hola!%20Quisiera%20info%20sobre%20psicoterapia%20%F0%9F%92%AA%F0%9F%8F%BC" target="_blank" rel="noreferrer">
                <button className='button' data-aos='fade-up'>Reserva tu cita 🧠</button>
            </a>
            <img className='pamplona' src={profile} alt="Alex" data-aos='fade-up' />
            <Footer/>
        </div>
    )
}

export default Home;