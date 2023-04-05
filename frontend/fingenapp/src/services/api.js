import axios from 'axios';

const API_BASE_URL = 'http://localhost:7000';

export const createUser = async () => {
    const response = await axios.post(`${API_BASE_URL}/users/`);
    return response.data;
}

export const updateUser = async (userData) => {
    const response = await axios.put(`${API_BASE_URL}/users/${userData.id}`, userData);
    return response.data;
}

export const getCategories = async () => {
    const response = await axios.get(`${API_BASE_URL}/categorias/`);
    return response.data;
};

export const createCategorie = async (categorieData) => {
    const response = await axios.post(`${API_BASE_URL}/categorias/`);
    return response.data;
};

export const updateCategorie = async (categorieData) => {
    const response = await axios.put(`${API_BASE_URL}/categorias/${categorieData.id}`, categorieData);
    return response.data;
};

export const deleteCategorie = async (categorieId) => {
    const response = await axios.delete(`${API_BASE_URL}/categorias/${categorieId}`);
    return response.data;
}

export const getExpenses = async () => {
    const response = await axios.get(`${API_BASE_URL}/despesas/`);
    return response.data;
};

export const getOneExpense = async (expenseId) => {
    const response = await axios.get(`${API_BASE_URL}/depesas/${expenseId}`);
    return response.data;
}

export const createExpense = async (expenseData) => {
    const response = await axios.post(`${API_BASE_URL}/depesas/`);
    return response.data;
}

export const updateExpense = async (expenseData) => {
    const response = await axios.put(`${API_BASE_URL}/depesas/${expenseData.id}`, expenseData);
    return response.data;
}

export const deleteExpense = async (expenseId) => {
    const response = await axios.delete(`${API_BASE_URL}/depesas/${expenseId}`);
    return response.data;
}

export const getRevenues = async () => {
    const response = await axios.get(`${API_BASE_URL}/receitas/`);
    return response.data;
}

export const getOneRevenue = async (revenueId) => {
    const response = await axios.get(`${API_BASE_URL}/receitas/${revenueId}`);
    return response.data;
}

export const createRevenue = async (revenueData) => {
    const response = await axios.post(`${API_BASE_URL}/receitas/`);
    return response.data;
}

export const updateRevenue = async (revenueData) => {
    const response = await axios.put(`${API_BASE_URL}/receitas/${revenueData.id}`, revenueData);
    return response.data;
}

export const deleteRevenue = async (revenueId) => {
    const response = await axios.delete(`${API_BASE_URL}/receitas/${revenueId}`);
    return response.data;
}