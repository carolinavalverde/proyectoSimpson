import React from "react";

const Frase = ({ frase, personaje, imagen }) => {
  return (
    <section className="container">
      <div className="card">
        <h1 className="card-title">{personaje}</h1>
        <img
          src={imagen}
          alt={personaje}
          className="img-fluid w-100 h-50 rounded"
        />
        <div className="card-text bg-light text-bg-light text-center my-4">
          <p className="fw-bold display-5 p-3">{frase}</p>
        </div>
      </div>
    </section>
  );
};

export default Frase;
