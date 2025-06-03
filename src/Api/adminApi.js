import axios from "axios";

const BASE_URL = "http://localhost:5050/api";

export const getAdminServices = async () => {
  try {
    const token = localStorage.getItem("jwtToken");
    const response = await axios.get(`${BASE_URL}/admin/services`, {
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

export const updateServiceStatus = async (serviceId, newStatus) => {
  try {
    const token = localStorage.getItem("jwtToken");
    const response = await axios.patch(
      `${BASE_URL}/admin/services/${serviceId}/status`,
      {
        status: newStatus,
        statusReason:
          newStatus === "approved"
            ? "Service meets all requirements"
            : "Service does not meet all requirements",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("Service status updated:", response.data.success);
    if (!response.data.success)
      throw new Error("Failed to update service status");
    return response.data.data;
  } catch (error) {
    console.error("Error updating service status:", error);
    throw error;
  }
};
