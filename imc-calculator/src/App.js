import React, { useState } from 'react';
import './App.css';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    const alturaEmMetros = parseFloat(altura) / 100; // Convertendo para metros
    const pesoEmKg = parseFloat(peso);

    if (!alturaEmMetros || !pesoEmKg || alturaEmMetros <= 0 || pesoEmKg <= 0) {
      setImc(null);
      setClassificacao('Valores inválidos.');
      return;
    }

    const calculoIMC = (pesoEmKg / (alturaEmMetros * alturaEmMetros)).toFixed(2);

    setImc(calculoIMC);
    setClassificacao(determinarClassificacao(calculoIMC));
  };

  const determinarClassificacao = (imc) => {
    if (imc < 18.5) return 'Abaixo do peso';
    if (imc >= 18.5 && imc <= 24.9) return 'Peso normal';
    if (imc >= 25 && imc <= 29.9) return 'Sobrepeso';
    if (imc >= 30 && imc <= 34.9) return 'Obesidade Grau I';
    if (imc >= 35 && imc <= 39.9) return 'Obesidade Grau II';
    return 'Obesidade Grau III';
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <div className="form">
        <label>
          Altura (cm):
          <input
            type="number"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            placeholder="Digite sua altura"
          />
        </label>
        <label>
          Peso (kg):
          <input
            type="number"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            placeholder="Digite seu peso"
          />
        </label>
        <button onClick={calcularIMC}>Calcular IMC</button>
      </div>
      <div className="resultado">
        {imc && (
          <>
            <p>Seu IMC: {imc}</p>
            <p>Classificação: {classificacao}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
