import axios from "axios";

// const BASE_URL = "http://localhost:5050/api";
const BASE_URL = "https://event-management-production-c14f.up.railway.app/api";
export const getVendorServices = async (page = 1, limit = 10) => {
  try {
    const token = localStorage.getItem("vendorjwtToken");
    const response = await axios.get(`${BASE_URL}/vendor/services`, {
      params: {
        page,
        limit,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("Fetched services:", response.data);
    if (!response.data.success) throw new Error("Failed to fetch services");

    return response.data;
  } catch (error) {
    console.error("Error fetching services:", error);
    return {
      success: false,
      data: [],
      pagination: {
        currentPage: 1,
        totalPages: 1,
        totalItems: 0,
        itemsPerPage: limit,
        hasNextPage: false,
        hasPreviousPage: false,
      },
    };
  }
};

export const addVendorService = async (serviceData) => {
  try {
    const token = localStorage.getItem("vendorjwtToken");
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

export const deleteVendorService = async (serviceId) => {
  try {
    const token = localStorage.getItem("vendorjwtToken");
    const response = await axios.delete(
      `${BASE_URL}/vendor/services/${serviceId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("Service deleted:", response.data.success);
    if (!response.data.success) throw new Error("Failed to delete service");
    return response.data.data;
  } catch (error) {
    console.error("Error deleting service:", error);
    throw error;
  }
};
