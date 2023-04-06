import axios from 'axios';
import Cookies from 'js-cookie';

const API_BASE_URL = 'http://localhost:7000';
const token = Cookies.get('token');

export const login = async (credentials) => {
    const response = await axios.post(`${API_BASE_URL}/api/token/`, credentials);
    return response.data;
}

export const userLogin = async (credentials) => {
    const response = await axios.post(`${API_BASE_URL}/user/`, credentials, { headers: { Authorization: `Bearer ${token}` } })
    return response.data;
}

export const getOneUser = async(userData) => {
    const response = await axios.get(`${API_BASE_URL}/users/${userData.id}`, userData, { headers: { Authorization: `Bearer ${token}` } });
    return response.data;
}

export const createUser = async () => {
    const response = await axios.post(`${API_BASE_URL}/users/`, { headers: { Authorization: `Bearer ${token}` } });
    return response.data;
}

export const updateUser = async (userData) => {
    const response = await axios.put(`${API_BASE_URL}/users/${userData.id}`, userData, { headers: { Authorization: `Bearer ${token}` } });
    return response.data;
}

export const getCategories = async () => {
    const response = await axios.get(`${API_BASE_URL}/categorias/`, { headers: { Authorization: `Bearer ${token}` } });
    return response.data;
};

export const createCategorie = async (categorieData) => {
    const response = await axios.post(`${API_BASE_URL}/categorias/`, { headers: { Authorization: `Bearer ${token}` } });
    return response.data;
};

export const updateCategorie = async (categorieData) => {
    const response = await axios.put(`${API_BASE_URL}/categorias/${categorieData.id}`, categorieData, { headers: { Authorization: `Bearer ${token}` } });
    return response.data;
};

export const deleteCategorie = async (categorieId) => {
    const response = await axios.delete(`${API_BASE_URL}/categorias/${categorieId}`, { headers: { Authorization: `Bearer ${token}` } });
    return response.data;
}

export const getExpenses = async () => {
    const response = await axios.get(`${API_BASE_URL}/despesas/`, { headers: { Authorization: `Bearer ${token}` } });
    return response.data;
};

export const getOneExpense = async (expenseId) => {
    const response = await axios.get(`${API_BASE_URL}/depesas/${expenseId}`, { headers: { Authorization: `Bearer ${token}` } });
    return response.data;
}

export const createExpense = async (expenseData) => {
    const response = await axios.post(`${API_BASE_URL}/depesas/`, { headers: { Authorization: `Bearer ${token}` } });
    return response.data;
}

export const updateExpense = async (expenseData) => {
    const response = await axios.put(`${API_BASE_URL}/depesas/${expenseData.id}`, expenseData, { headers: { Authorization: `Bearer ${token}` } });
    return response.data;
}

export const deleteExpense = async (expenseId) => {
    const response = await axios.delete(`${API_BASE_URL}/depesas/${expenseId}`, { headers: { Authorization: `Bearer ${token}` } });
    return response.data;
}

export const getRevenues = async () => {
    const response = await axios.get(`${API_BASE_URL}/receitas/`, { headers: { Authorization: `Bearer ${token}` } });
    return response.data;
}

export const getOneRevenue = async (revenueId) => {
    const response = await axios.get(`${API_BASE_URL}/receitas/${revenueId}`, { headers: { Authorization: `Bearer ${token}` } });
    return response.data;
}

export const createRevenue = async (revenueData) => {
    const response = await axios.post(`${API_BASE_URL}/receitas/`, { headers: { Authorization: `Bearer ${token}` } });
    return response.data;
}

export const updateRevenue = async (revenueData) => {
    const response = await axios.put(`${API_BASE_URL}/receitas/${revenueData.id}`, revenueData, { headers: { Authorization: `Bearer ${token}` } });
    return response.data;
}

export const deleteRevenue = async (revenueId) => {
    const response = await axios.delete(`${API_BASE_URL}/receitas/${revenueId}`, { headers: { Authorization: `Bearer ${token}` } });
    return response.data;
}