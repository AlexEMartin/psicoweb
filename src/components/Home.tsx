import { SideBar } from "./sidebar/SideBar"
import './Home.scss';
import terapeuta from '../images/terapeuta.png'
import profile from '../images/profile.jpeg'


export const Home = () => {

    return (
        <div className='Home'>
            <SideBar />
            <h1 className='home-title'>Welcome</h1>
            <p className='home-p1'> 
                Mi nombre es Alex y es un placer tenerte por mi sitio 😊
                Soy Psicólogo y Software Developer de Argentina 🇦🇷
                He hecho yo mismo este sitio web para recibirte 🙌🏼
            </p>
            <div className='professions'>
                <img className='sticker' src={terapeuta} alt="psicologo" />
            </div>
            <h1 className='home-title2'>Sobre mí</h1>
            <p className='home-p1'>
                Licenciado en Psicología (Universidad Nacional de Córdoba, Argentina), especialista en Psicoterapia Cognitivo Conductual 🧠
                Breve y Focalizada. Trabajo actualmente realizando Psicoterapia Online 💻 
                Tuve la suerte de experimentar vivir en culturas diferentes, lo que me brindó
                el aprendizaje y la posibilidad de trabajar con personas de diferentes partes del mundo 🌍

            </p>
            <span className='home-p1'>Entre ellas, personas de : </span>
            <ul className='flag-container'>
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
            <button className='button'>Contacto</button>
            <img className='pamplona' src={profile} alt="Alex" />
        </div>
    )
}