import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Frase from "./components/Frase.jsx";

const App = () => {
  const frasesSimpsons = [
    {
      personaje: "Homer Simpson",
      imagen: "https://www.clarin.com/img/2016/05/13/S1fxKu3FNx_1200x0.jpg",
      frase: "Mmm, rosquillas!",
    },
    {
      personaje: "Bart Simpson",
      imagen:
        "https://pm1.aminoapps.com/6678/6f4557012b49f1c447ebe5a47d6248854da8152b_00.jpg",
      frase: "¡Ay, caramba!",
    },
  ];

  const [indiceFrase, setIndiceFrase] = useState(0);

  const cambiarFrase = () => {
    const nuevoIndice = Math.floor(Math.random() * frasesSimpsons.length);
    setIndiceFrase(nuevoIndice);
  };

  return (
    <section className="container mt-4 text-center">
      <h1 className="text-warning text-center">The Simpson</h1>
      <Frase
        frase={frasesSimpsons[indiceFrase].frase}
        personaje={frasesSimpsons[indiceFrase].personaje}
        imagen={frasesSimpsons[indiceFrase].imagen}
      />
      <button className="btn btn-warning p-3" onClick={cambiarFrase}>
        Obtener Frase
      </button>
    </section>
  );
};

export default App;
