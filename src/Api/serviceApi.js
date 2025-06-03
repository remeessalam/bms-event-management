import axios from "axios";

const BASE_URL = "http://localhost:5050/api";

export const fetchServices = async (service) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/services?category=${service}`
    );
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
export const fetchServicesDetils = async (serviceId) => {
  try {
    const response = await axios.get(`${BASE_URL}/services/${serviceId}`);
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
