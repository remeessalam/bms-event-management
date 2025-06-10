import axios from "axios";

// const BASE_URL = "http://localhost:5050/api";
const BASE_URL = "https://event-management-production-c14f.up.railway.app/api";
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};
