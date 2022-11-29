import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import Footer from './footer/Footer';
import './Services.scss';
import { SideBar } from "./sidebar/SideBar";
import dx from '../images/dx.png';

const Services = () => {

  useEffect(() => {AOS.init({duration: 2000})}, [])

  return (
    <div className="services">
        <SideBar />
        <h1 className="home-title" data-aos='fade-left'>Psicoterapia Online</h1>
        <p className='home-p1' data-aos='fade-left'>
          Mi especialidad es la Psicoterapia Cognitivo Conductual, breve y focalizada.
          Al ser la modalidad Online, atiendo todo tipo de consultas que no impliquen un
          diagnóstico complejo. Si bien tengo experiencia trabajando con personas que
          padecen Esquizofrenia, Trastorno Bipolar, Adicciones o Trastornos de la Conducta
          Alimentaria. Considero que ameritan un abordaje integral e interdisciplinario
          en la que dicha modalidad se ve limitada.
        </p>
        <p className='home-p1' data-aos='fade-left'>
          Motivo por el cual, la entrevista inicial es fundamental para evaluar si mis
          herramientas son idóneas para las características de la consulta, y de no ser 
          así, brindar la mejor orientación posible.
        </p>
        <div className="professions" data-aos='fade-right'>
          <img className="sticker" src={dx} alt="diagnose" />
        </div>
        <Footer />
    </div>
  )
}

export default Services