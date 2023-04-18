import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
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
  var date = [];

  useEffect(() => {
    async function fetchData(request) {
      const revenueData = await getRevenues();
      setRevenue(revenueData.results);
    }
    fetchData();
  }, []);
  
  for (let i = 0; i< revenue.length; i++) {
    totalRevenue += parseInt(revenue[i].valor)
    date = [revenue[i].data];
  }

  return {totalRevenue, date};
}

// Generate Sales Data
function createData(balance, date) {
  return { balance, date };
}

export default function Chart() {
  const theme = useTheme();
  
  const revenue = useGetRevenue();
  const expenses = useGetExpenses();
  const balance = revenue.totalRevenue - expenses;
  const date = revenue.date;

  const data = [  createData(balance, date)];

  return (
    <React.Fragment>
      <Title>Receita x Despesas</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="date"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Sales ($)
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="balance"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}