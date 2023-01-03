import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./footer/Footer";
import "./Services.scss";
import { SideBar } from "./sidebar/SideBar";
import dx from "../images/dx.png";
import paciente1 from "../images/paciente-mujer.png";
import paciente2 from "../images/paciente-hombre.png";
import Price from "./price/Price";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const requirements: String[] = [
    "Una pc, laptop o móvil",
    "Buena conexión a internet",
    "Un espacio cómodo de privacidad",
    "45 min de tu tiempo",
  ];

  const queries: String[] = [
    "Ansiedad 🌪️",
    "Estrés ⚡️",
    "Vínculos 👩🏻‍🤝‍👩🏾 👩🏼‍🤝‍👨🏻",
    "Regulación emocional 🧠",
    "Habilidades sociales 🙌🏼",
    "Derivaciones médicas 👩🏻‍⚕️",
    "Crisis, trauma, duelo 😖",
  ];

  return (
    <div className="services">
      <SideBar />
      <h1 className="home-title" data-aos="fade-left">
        Psicoterapia Online
      </h1>
      <p className="home-p1" data-aos="fade-left">
        Mi especialidad es la Psicoterapia Cognitivo Conductual, breve y
        focalizada. Al ser la modalidad Online, atiendo todo tipo de consultas
        que no impliquen un diagnóstico complejo. Si bien tengo experiencia
        trabajando con personas que padecen Esquizofrenia, Trastorno Bipolar,
        Adicciones o Trastornos de la Conducta Alimentaria. Considero que
        ameritan un abordaje integral e interdisciplinario en la que dicha
        modalidad se ve limitada.
      </p>
      <p className="home-p1" data-aos="fade-left">
        Motivo por el cual, la entrevista inicial es fundamental para evaluar si
        mis herramientas son idóneas para las características de la consulta, y
        de no ser así, brindar la mejor orientación posible.
      </p>
      <div className="professions" data-aos="fade-right">
        <img className="sticker" src={dx} alt="diagnose" />
      </div>
      <h1 className="home-title" data-aos="fade-left">
        ¿Qué necesito?
      </h1>
      <ul className="home-p1" data-aos="fade-left">
        {requirements.map((item) => (
          <li className="list">{item}</li>
        ))}
      </ul>
      <div className="professions" data-aos="fade-right">
        <img className="sticker" src={paciente1} alt="paciente-mujer" />
        <img className="sticker" src={paciente2} alt="paciente-hombre" />
      </div>
      <a
        href="https://api.whatsapp.com/send?phone=5491123763974&text=Hola!%20Quisiera%20info%20sobre%20psicoterapia%20%F0%9F%92%AA%F0%9F%8F%BC"
        target="_blank"
        rel="noreferrer"
      >
        <button className="button" data-aos="zoom-in">
          Reserva tu cita 🧠
        </button>
      </a>
      <h1 className="home-title" data-aos="fade-left">
        Consultas frecuentes
      </h1>
      <ul className="home-p1" data-aos="fade-left">
        {queries.map((query) => (
          <li className="list">{query}</li>
        ))}
      </ul>
      <Price />
      <Footer />
    </div>
  );
};

export default Services;
