import React from "react";

const services = [
  { id: 1, name: "Liberação Miofascial", price: 150, image: "./src/assets/liberacao.jpeg" },
  { id: 2, name: "Ventosa Terapia", price: 120, image: "./src/assets/ventosa.jpg" },
];

export default function Profile({ setStep, setSelectedService }) {
  return (
    <div>
      <h1>Perfil do Fisioterapeuta</h1>
      <img src="https://via.placeholder.com/150" alt="Fisioterapeuta" />
      <h2>Dr. João Silva</h2>
      <p>Especialista em reabilitação física e esportiva.</p>

      <h3>Serviços Disponíveis</h3>
      <div>
        {services.map((service) => (
          <div key={service.id} style={{ margin: "10px", border: "1px solid #ccc", padding: "10px" }}>
            <img src={service.image} alt={service.name} />
            <h4>{service.name}</h4>
            <p>R$ {service.price}</p>
            <button onClick={() => { setSelectedService(service); setStep(2); }}>
              Agendar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
