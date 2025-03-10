import React, { useState } from "react";
import Profile from "./components/Profile";
import Booking from "./components/Booking";

function App() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {step === 1 && <Profile setStep={setStep} setSelectedService={setSelectedService} />}
      {step === 2 && <Booking selectedService={selectedService} />}
    </div>
  );
}

export default App;
