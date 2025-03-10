import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const availableTimes = ["08:00", "09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];

export default function Booking({ selectedService }) {
  const [date, setDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);

  return (
    <div>
      <h1>Agendamento</h1>
      <h2>{selectedService ? selectedService.name : "Selecione um serviço"}</h2>
      <Calendar onChange={setDate} value={date} />
      <h3>Horários disponíveis</h3>
      <div>
        {availableTimes.map((time) => (
          <button key={time} onClick={() => setSelectedTime(time)} style={{ margin: "5px" }}>
            {time}
          </button>
        ))}
      </div>
      {selectedTime && <p>Horário selecionado: {selectedTime}</p>}
      <button onClick={() => alert("Agendamento confirmado!")}>Confirmar Agendamento</button>
    </div>
  );
}
