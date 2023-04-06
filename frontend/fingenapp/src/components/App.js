import '../App.css';
import React, { useState, useEffect } from 'react';
import { getCategories, getExpenses } from '../services/api';
import Button from '@mui/material/Button'

function ExpenseList() {
  const [expenses, setExpenses] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const expensesData = await getExpenses();
      setExpenses(expensesData.results);

      const categoriesData = await getCategories();
      setCategories(categoriesData);
    }
    fetchData();
  }, []);
    
  return (
    <div>
      <h2>Lista de despesas</h2>
      <ul>
        {expenses.map(Despesa => (
          <><li key={Despesa.id}>Despesa: {Despesa.descricao} </li>
            <li key={Despesa.id}>Categoria: {Despesa.categoria.nome} </li>
            <li key={Despesa.id}>Valor: R$ {Despesa.valor} </li>
          </>
        ))}
        <Button variant="contained">Teste</Button>
      </ul>
    </div>
  );
}

export default ExpenseList;
