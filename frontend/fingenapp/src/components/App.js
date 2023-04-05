import '../App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DespesaList() {
  const [despesas, setDespesas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:7000/despesas/')
      .then(response => {
        setDespesas(response.data.results);
        console.log(response.data.results)
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Lista de despesas</h2>
      <ul>
        {despesas.map(Despesa => (
          <li key={Despesa.id}>Despesa: {Despesa.descricao} - Categoria: {Despesa.categoria.nome} - Valor: R$ {Despesa.valor}</li>
        ))}
      </ul>
    </div>
  );
}

export default DespesaList;
