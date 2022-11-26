import { SideBar } from "./sidebar/SideBar"
import './Home.scss';
import terapeuta from '../images/terapeuta.png'
import software from '../images/software.png'


export const Home = () => {

    return (
        <div className='Home'>
            <SideBar />
            <h1 className='home-title'>Welcome</h1>
            <p className='home-p1'> 
                Mi nombre es Alex y es un placer tenerte por mi sitio 😊.
                Soy Psicólogo y Software Developer de Argentina 🇦🇷,
                He hecho yo mismo este sitio web para recibirte!
            </p>
            <div className='professions'>
                <img className='sticker' src={terapeuta} alt="psicologo" />
                <img className='sticker' src={software} alt="desarrollador" />
            </div>
        </div>
    )
}