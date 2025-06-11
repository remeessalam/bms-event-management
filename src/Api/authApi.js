import axios from "axios";

// const BASE_URL = "http://localhost:5050/api/auth";
const BASE_URL =
  "https://event-management-production-c14f.up.railway.app/api/auth";
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

export const logoutUser = async (role) => {
  try {
    const token = localStorage.getItem(role);

    const response = await axios.post(
      `${BASE_URL}/logout`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};
