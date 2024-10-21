import React, { useState } from "react";

const IMCForm = ({ calcularIMC }) => {
    const [altura, setAltura] = useState("");
    const [peso, setPeso] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        calcularIMC(altura, peso);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Altura (cm): </label>
                <input
                    type="number"
                    value={altura}
                    onChange={(e) => setAltura(e.target.value)}
                    placeholder="Digite sua altura"
                />
            </div>
            <div>
                <label>Peso (kg): </label>
                <input
                    type="number"
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}
                    placeholder="Digite seu peso"
                />
            </div>
            <button type="submit">Calcular IMC</button>
        </form>
    );
};

export default IMCForm;
