import React, { useState, useEffect } from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { getExpenses, getRevenues } from '../services/api';
import Title from './Title';
import { formataData } from './App';

function preventDefault(event) {
  event.preventDefault();
}

function GetExpenses() {
  const [expenses, setExpenses] = useState([]);
  var totalExpenses = 0;

  useEffect(() => {
    async function fetchData(request) {
      const expensesData = await getExpenses();
      setExpenses(expensesData.results);
    }
    fetchData();
  }, []);
  
  for (let i = 0; i< expenses.length; i++) {
    totalExpenses += parseInt(expenses[i].valor)
  }

  return totalExpenses;
}

function GetRevenues() {
  const [revenue, setRevenue] = useState([]);
  var totalRevenue = 0;

  useEffect(() => {
    async function fetchData(request) {
      const revenueData = await getRevenues();
      setRevenue(revenueData.results);
    }
    fetchData();
  }, []);
  
  for (let i = 0; i< revenue.length; i++) {
    totalRevenue += parseInt(revenue[i].valor)
  }

  return totalRevenue;
}

export default function Deposits() {
  

  return (
    <React.Fragment>
      <Title>Saldo</Title>
      <Typography component="p" variant="h4">
        R$ {GetRevenues() - GetExpenses()}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        Em {formataData(new Date())}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Conferir receita
        </Link>
      </div>
    </React.Fragment>
  );
}