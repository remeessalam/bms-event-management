import axios from "axios";

const BASE_URL = "http://localhost:5050/api";

export const getVendorServices = async () => {
  try {
    const token = localStorage.getItem("jwtToken");
    const response = await axios.get(`${BASE_URL}/vendor/services`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("Fetched services:", response.data.success);
    if (!response.data.success) throw new Error("Failed to fetch services");
    const data = response.data.data;
    console.log("Fetched services:", data);
    return data;
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
};

export const addVendorService = async (serviceData) => {
  try {
    const token = localStorage.getItem("jwtToken");
    const response = await axios.post(
      `${BASE_URL}/vendor/submit-service`,
      serviceData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("Service addedasdfsd:", response.data.success);
    if (!response.data.success) throw new Error("Failed to add service");
    return response.data.data;
  } catch (error) {
    console.error("Error adding service:", error);
    throw error;
  }
};
