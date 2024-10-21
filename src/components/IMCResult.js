import React from "react";

const IMCResult = ({ imc, classificacao }) => {
    return (
        <div className="result-container">
            {imc && (
                <>
                    <h2>Seu IMC é: {imc}</h2>
                    <h3>Classificação: {classificacao}</h3>
                </>
            )}
        </div>
    );
};

export default IMCResult;
