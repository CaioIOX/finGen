import React, { useState, useEffect } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems } from '../components/ListItem';
import Deposits from '../components/Deposits';
import ExpensesTable from '../components/ExpensesTable';
import Loading from '../components/Loading';
import Cookies from 'js-cookie';
import { getOneUser, userLogin } from '../services/api';
import { ListItemButton, Pagination } from '@mui/material';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../components/Title';
import { getExpenses } from '../services/api';
import { formataData } from '../components/App';
import ListItem from '../components/ListItem';
import StickyFooter from '../components/StickyFooter';

var data ={
  page: 1,
  numberOfPages: 0,
  nextPage: "",
  previousPage: "",
  results: []
}

// Generate Order Data
function createData(id, categoriaNome, descricao, data, valor) {
  return { id, categoriaNome, descricao, data, valor };
}

function GetExpensesList() {
  data.results = [];
  const [expenses, setExpenses] = useState([]);
  useEffect(() => {
    async function fetchData(request) {
      const expensesData = await getExpenses();
      setExpenses(expensesData.results);
      data.numberOfPages = Math.ceil((expensesData.count)/(10));
    }
    fetchData();
  }, []);
  
  for (let i = 0; i< expenses.length; i++) {
    data.results.push(
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

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

function ListOfExpenses() {
    const [open, setOpen] = React.useState(true);
    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
    
    const toggleDrawer = () => {
    setOpen(!open);
  };
    
   GetExpensesList();
  
    return (
 <>
  <ThemeProvider theme={mdTheme}>
    {isLoading ? (
      <Loading />
    ) : (
      <><Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
            <Toolbar
                sx={{
                    pr: "24px", // keep right padding when drawer closed
                }}
            >
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggleDrawer}
                    sx={{
                        marginRight: "36px",
                        ...(open && { display: "none" }),
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <ListItemButton
                    component="h2"
                    variant="h6"
                    href="/dashboard"
                    color="inherit"
                    nowrap="true"
                    sx={{ flexGrow: 1 }}
                >
                    Dashboard
                </ListItemButton>
                <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
            <Toolbar
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    px: [1],
                }}
            >
                <IconButton onClick={toggleDrawer}>
                    <ChevronLeftIcon />
                </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">
                {mainListItems}
                <Divider sx={{ my: 1 }} />
            </List>
        </Drawer>
        <Box
            component="main"
            sx={{
                backgroundColor: (theme) => theme.palette.mode === "light"
                    ? theme.palette.grey[100]
                    : theme.palette.grey[900],
                flexGrow: 1,
                height: "100vh",
                overflow: "auto",
            }}
        >
            <Toolbar />
            <React.Fragment>
                <Grid item xs="auto" md="auto" lg="auto">
                    <Paper
                        sx={{
                            p: 2,
                            display: "flex",
                            flexDirection: "column",
                            height: "auto",
                        }}
                    >
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
                            {data.results.length !== 0 ? (
                                <><TableBody>
                              {data.results.map((row) => (
                                <TableRow key={row.id}>
                                  <TableCell>{row.data}</TableCell>
                                  <TableCell>{row.descricao}</TableCell>
                                  <TableCell>{row.categoriaNome}</TableCell>
                                  <TableCell align="right">{`R$ ${row.valor}`}</TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                            <Box
                            sx={{
                              marginTop: 5
                            }}
                            >
                              <Pagination count={data.numberOfPages} variant="outlined" shape="rounded" />
                            </Box></>
                            ) : (
                                <TableBody>
                                    <TableRow>
                                        <TableCell colSpan={4} align="center">
                                            Nenhuma despesa próxima!
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            )}
                        </Table>
                    </Paper>
                </Grid>
            </React.Fragment>
        </Box>
    </Box><StickyFooter /></>         
  )}
    </ThemeProvider>
    
</>
);
}

export default function ExpensesList() {
    return <ListOfExpenses/>
}