import { useEffect } from 'react'
import AOS from 'aos';
import { SideBar } from "./sidebar/SideBar"
import './Ebook.scss';
import Footer from "./footer/Footer";
import tapa from '../images/tapa.png'


const Ebook = () => {

  useEffect(() => {AOS.init({duration: 2000})}, [])

  return (
    <div className="ebook-page">
        <SideBar />
        <h1 className='home-title' data-aos='fade-down'>Ebook</h1>
        <p className='description' data-aos='fade-down'>
            Haber escrito un libro 📚 es uno de mis orgullos más grandes.
            El hecho de que personas de países 🌍 como España, Francia, México,
            Estados Unidos y Argentina consideren que vale la pena invertir
            su dinero en leerlo, es un reconocimiento hermoso ❤️
        </p>
        <p className='description' data-aos='fade-down'>
            En el mismo desarrollo temas que considero de gran importancia para la vida
            cotidiana: Autoestima, habilidades sociales, inteligencia emocional,
            regulación emocional, educación, mandatos y estructuras sociales/culturales, 
            entre otros. Que en mi opninión son herramientas interesantes para mejorar
            nuestra salud 🧠 y calidad de vida 💪🏼
        </p>
        <div className='ebook-container' data-aos='fade-down'>
          <img className='ebook' src={tapa} alt="Diamante en Bruto" />
        </div>
        <Footer />
    </div>
  )
}

export default Ebook