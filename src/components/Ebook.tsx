import { useEffect, useState } from "react";
import AOS from "aos";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { classNames } from "../util/classes";
import { SideBar } from "./sidebar/SideBar";
import "./Ebook.scss";
import Footer from "./footer/Footer";
import tapa from "../images/tapa.png";

const Ebook = () => {
  const [download, setDownload] = useState<boolean>(true);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const onButtonClick = () => {
    fetch('Diamante en bruto.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Diamante en bruto.pdf';
            alink.click();
        })
    })
}

  return (
    <div className="ebook-page">
      <SideBar />
      <h1 className="home-title" data-aos="fade-down">
        Ebook
      </h1>
      <p className="description" data-aos="fade-down">
        Haber escrito un libro 📚 es uno de mis orgullos más grandes. El hecho
        de que personas de países 🌍 como España, Francia, México, Estados
        Unidos y Argentina consideren que vale la pena invertir su dinero en
        leerlo, es un reconocimiento hermoso ❤️
      </p>
      <p className="description" data-aos="fade-down">
        En el mismo desarrollo temas que considero de gran importancia para la
        vida cotidiana: Autoestima, habilidades sociales, inteligencia
        emocional, regulación emocional, educación, mandatos y estructuras
        sociales/culturales, entre otros. Que en mi opninión son herramientas
        interesantes para mejorar nuestra salud 🧠 y calidad de vida 💪🏼
      </p>
      <div className="ebook-container" data-aos="fade-down">
        <img className="ebook" src={tapa} alt="Diamante en Bruto" />
      </div>
      <button
        className={classNames(download ? "button" : "button-disabled")}
        disabled={download}
        onClick={onButtonClick}
      >
          Compra y descarga 📚
      </button>
      <PayPalScriptProvider
        options={{
          "client-id":
          "Adelq-kHTqcZtSWXqvqBZ1j7LJD_OpYmeZm5-kENjoQlta83a4t7z3_ctw75p23W117ZTDL3KmHqNwFz",
        }}
      >
        <PayPalButtons
          className="paypal"
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    currency_code: 'USD',
                    value: '3.99',
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions): any => {
            return actions.order?.capture().then((details) => {
              const name = details.payer.name?.given_name;
              console.log(name);
              setDownload(false);
            });
          }}
        />
      </PayPalScriptProvider>
      <Footer />
    </div>
  );
};

export default Ebook;
