import React from "react";

const Frase = ({ frase, personaje, imagen }) => {
  return (
    <section className="container">
      <h1>{personaje}</h1>
      <img
        src={imagen}
        alt={personaje}
        thumbnail
        className="img-fluid w-100 h-100"
      />
      <div className="container bg-light text-bg-light text-center my-4">
        <p className="fw-bold p-3">{frase}</p>
      </div>
    </section>
  );
};

export default Frase;
