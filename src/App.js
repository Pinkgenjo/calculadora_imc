import React, { useState } from "react";
import IMCForm from "./components/IMCForm";
import IMCResult from "./components/IMCResult";
import "./App.css";

function App() {
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState("");

  const calcularIMC = (altura, peso) => {
    const alturaMetros = altura / 100;
    const imcCalculado = (peso / (alturaMetros * alturaMetros)).toFixed(2);
    setImc(imcCalculado);
    classificarIMC(imcCalculado);
  };

  const classificarIMC = (imc) => {
    if (imc < 18.5) {
      setClassificacao("Abaixo do peso");
    } else if (imc >= 18.5 && imc < 24.9) {
      setClassificacao("Peso normal");
    } else if (imc >= 25 && imc < 29.9) {
      setClassificacao("Sobrepeso");
    } else {
      setClassificacao("Obesidade");
    }
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <IMCForm calcularIMC={calcularIMC} />
      <IMCResult imc={imc} classificacao={classificacao} />
    </div>
  );
}

export default App;
