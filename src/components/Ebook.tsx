import { SideBar } from "./sidebar/SideBar"
import './Ebook.scss';
import Footer from "./footer/Footer";


const Ebook = () => {
  return (
    <div className="ebook-page">
        <SideBar />
        <h1>HOLA MUNDO</h1>
        <Footer />
    </div>
  )
}

export default Ebook