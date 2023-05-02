import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getExpenses, getRevenues } from '../services/api';
import Title from './Title';

function useGetExpenses() {
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

function useGetRevenue() {
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

// Generate Sales Data
function createData(revenue, expenses) {
  const balance = revenue - expenses;
  return { revenue, expenses, balance } ;
}

export default function Chart() {
  const theme = useTheme();
  
  const revenue = useGetRevenue();
  const expenses = useGetExpenses();

  const data = [  createData(revenue, expenses) ];

  return (
    <React.Fragment>
      <Title>Receita x Despesas</Title>
      <ResponsiveContainer>
      <BarChart 
        width={150} 
        height={40} 
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        >
          <Bar name="Saldo" dataKey="balance" fill="#8884d8" barSize={50} />
          <Bar name="Receita" dataKey="revenue" fill="#00FF00" barSize={50} />
          <Bar name="Despesas" dataKey="expenses" fill="#FF0000" barSize={50} />
          <Tooltip  separator=': R$ ' />
          <XAxis values="Gráfico" hide="true" />
          <YAxis />
          <Legend />
        </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}