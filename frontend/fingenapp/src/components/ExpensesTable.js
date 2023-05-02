import React, { useState, useEffect } from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { getExpenses } from '../services/api';
import { formataData } from './App';

var rows = [];

// Generate Order Data
function createData(id, categoriaNome, descricao, data, valor) {
  return { id, categoriaNome, descricao, data, valor };
}

function GetExpensesList() {
  const [expenses, setExpenses] = useState([]);
  rows = [];
  useEffect(() => {
    async function fetchData(request) {
      const expensesData = await getExpenses();
      setExpenses(expensesData.results);
    }
    fetchData();
  }, []);
  
  for (let i = 0; i< expenses.length; i++) {
    const date = new Date();
    if (new Date(expenses[i].data) > date) {
      rows.push(
        createData(
          expenses[i].id,
          expenses[i].categoria.nome,
          expenses[i].descricao,
          formataData(expenses[i].data, true),
          expenses[i].valor
        )
      )  
    }
  }
}

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  GetExpensesList();
  return (
    <React.Fragment>
      <Title>Próximas Despesas</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Data</TableCell>
            <TableCell>Descricao</TableCell>
            <TableCell>Categoria</TableCell>
            <TableCell align="right">Valor</TableCell>
          </TableRow>
        </TableHead>
        {rows.length > 0 ? (
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.data}</TableCell>
                <TableCell>{row.descricao}</TableCell>
                <TableCell>{row.categoriaNome}</TableCell>
                <TableCell align="right">{`R$ ${row.valor}`}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        ) : ( 
          <TableBody>
            <TableRow>
              <TableCell colSpan={4} align="center">Nenhuma despesa próxima!</TableCell>
            </TableRow>
          </TableBody>
        )}
      </Table>
      <Link color="primary" href="/expensesList" onClick={preventDefault} sx={{ mt: 3 }}>
        Ver todas despesas
      </Link>
    </React.Fragment>
  );
}