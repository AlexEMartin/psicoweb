import './Footer.scss';
import gmail from '../../images/gmail.png'
import instagram from '../../images/instagram.jpg'
import linkedin from '../../images/linkedin.png'
import whatsapp from '../../images/whatsapp.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-container">
        <a href="mailto:alexeusebiomartin@gmail.com" target="_blank" rel="noreferrer">
          <img className="social-media" src={gmail} alt="correo" />
        </a>
        <a href="https://www.instagram.com/tupsicoterapia.online/" target="_blank" rel="noreferrer">
         <img className="social-media" src={instagram} alt="instagram" />
        </a>
        <a href="https://www.linkedin.com/in/alex-martin-180206197/" target="_blank" rel="noreferrer">
          <img className="social-media" src={linkedin} alt="linkedin" />
        </a>
        <a href="https://api.whatsapp.com/send?phone=5491123763974&text=Hola!%20Quisiera%20info%20sobre%20psicoterapia%20%F0%9F%92%AA%F0%9F%8F%BC" target="_blank" rel="noreferrer">
          <img className="social-media" src={whatsapp} alt="whatsapp" />
        </a>
      </div>
    </div>
  )
}

export default Footer