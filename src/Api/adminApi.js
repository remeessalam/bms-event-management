import axios from "axios";
import toast from "react-hot-toast";

// const BASE_URL = "http://localhost:5050/api";
const BASE_URL = "https://event-management-production-c14f.up.railway.app/api";

export const getAdminServices = async (params) => {
  try {
    const token = localStorage.getItem("adminjwtToken");
    console.log("Fetching services with params:", params);
    const response = await axios.get(`${BASE_URL}/admin/services`, {
      params,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("Fetched services:", response.data.success);
    if (!response.data.success) throw new Error("Failed to fetch services");
    const data = response.data;
    console.log("Fetched services:", data);
    return data;
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
};

export const updateServiceStatus = async (serviceId, newStatus) => {
  try {
    const token = localStorage.getItem("adminjwtToken");
    const response = await axios.patch(
      `${BASE_URL}/admin/services/${serviceId}/status`,
      {
        status: newStatus,
        reason:
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
    if (!response.data.success) {
      toast.error(response.data.message || "Failed to update service status");
      throw new Error("Failed to update service status");
    }
    console.log("Response from status update:", response);
    toast.success(
      response.data.message || "Service status updated successfully"
    );

    // const data = await response.data.json();
    return response.data;
  } catch (error) {
    console.error("Error updating service status:", error);
    throw error;
  }
};
