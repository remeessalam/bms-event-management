import React, { useEffect, useState } from "react";
import { getAdminServices, updateServiceStatus } from "../Api/adminApi";
import {
  FaListAlt,
  FaCheckCircle,
  FaClock,
  FaTimesCircle,
} from "react-icons/fa";
import {
  FaAngleDoubleLeft,
  FaChevronLeft,
  FaChevronRight,
  FaAngleDoubleRight,
} from "react-icons/fa";
const AdminHomePage = () => {
  // State for services

  const [showStatusPopup, setShowStatusPopup] = useState(null);
  const [availableStatuses, setAvailableStatuses] = useState([]);
  const [statusPopupServiceId, setStatusPopupServiceId] = useState(null);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  // State for filtered services
  const [filteredServices, setFilteredServices] = useState([]);
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [servicesPerPage] = useState(5);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    itemsPerPage: 10,
    hasNextPage: false,
    hasPreviousPage: false,
  });
  // State for filters
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  // State for selected service
  const [selectedService, setSelectedService] = useState(null);

  // State for modal
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("review");
  // State for rejection reason
  const [rejectionReason, setRejectionReason] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("adminjwtToken");
    if (!token) {
      window.location.href = "/login";
    }
  }, []);

  // Fetch services with pagination and filters
  const fetchServices = async () => {
    try {
      setLoading(true);
      const params = {
        page: pagination.currentPage,
        limit: pagination.itemsPerPage,
        ...(statusFilter !== "all" && { status: statusFilter }),
        ...(categoryFilter !== "all" && { category: categoryFilter }),
        ...(searchTerm && { search: searchTerm }),
        ...(dateFilter && { date: dateFilter }),
      };
      console.log("Fetching services with params:", params);

      const response = await getAdminServices(params);
      setServices(response.data);
      console.log(response, services, "responsesafasdf");
      setPagination({
        currentPage: response.pagination.currentPage,
        totalPages: response.pagination.totalPages,
        totalItems: response.pagination.totalItems,
        itemsPerPage: response.pagination.itemsPerPage,
        hasNextPage: response.pagination.hasNextPage,
        hasPreviousPage: response.pagination.hasPreviousPage,
      });
    } catch (error) {
      console.error("Error fetching services:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // const fetchServices = async () => {
    //   try {
    //     const services = await getAdminServices();
    //     setServices(services || []);
    //     setFilteredServices(services || []);
    //   } catch (error) {
    //     console.error("Error fetching services:", error);
    //   }
    // };
    fetchServices();
  }, [
    pagination.currentPage,
    statusFilter,
    categoryFilter,
    searchTerm,
    dateFilter,
  ]);
  useEffect(() => {
    setPagination((prev) => ({ ...prev, currentPage: 1 }));
  }, [statusFilter, categoryFilter, searchTerm, dateFilter]);

  // Categories
  const categories = [
    "Photography",
    "Catring",
    "Venue",
    "Decoration",
    "Sound_DJ",
  ];
  //  *           enum: [CATRING, DECORATION, PHOTOGRAPHY, SOUND_DJ, VENUS, INVITATIONS]

  // Apply filters whenever filter criteria change
  useEffect(() => {
    let filtered = [...services];

    // Apply status filter
    if (statusFilter !== "all") {
      filtered = filtered.filter(
        (service) => service.status.toLowerCase() === statusFilter.toLowerCase()
      );
    }

    // Apply category filter
    if (categoryFilter !== "all") {
      filtered = filtered.filter(
        (service) =>
          service.category.toLowerCase() === categoryFilter.toLowerCase()
      );
    }

    // Apply search term filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (service) =>
          service.title.toLowerCase().includes(term) ||
          service.description.toLowerCase().includes(term) ||
          service.category.toLowerCase().includes(term)
      );
    }

    // Apply date filter
    if (dateFilter) {
      filtered = filtered.filter((service) => {
        const serviceDate = new Date(
          service.submissionDate || service.createdAt
        );
        const filterDate = new Date(dateFilter);
        return (
          serviceDate.getFullYear() === filterDate.getFullYear() &&
          serviceDate.getMonth() === filterDate.getMonth() &&
          serviceDate.getDate() === filterDate.getDate()
        );
      });
    }

    setFilteredServices(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [services, statusFilter, categoryFilter, searchTerm, dateFilter]);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".relative")) {
        setShowStatusPopup(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  // Get current services for pagination
  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = filteredServices.slice(
    indexOfFirstService,
    indexOfLastService
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate total pages
  const totalPages = Math.ceil(filteredServices.length / servicesPerPage);

  // Open service review modal
  const openReviewModal = (id) => {
    setSelectedService(id);
    setModalType("review");
    setShowModal(true);
  };

  // Open approve confirmation modal
  const openApproveModal = (id) => {
    setSelectedService(id);
    setModalType("approve");
    setShowModal(true);
  };

  // Open reject modal
  const openRejectModal = (id) => {
    setSelectedService(id);
    setRejectionReason("");
    setModalType("reject");
    setShowModal(true);
  };

  // Handle service approval
  const approveService = () => {
    if (selectedService) {
      const updatedServices = services.map((service) => {
        if (service.id === selectedService) {
          return {
            ...service,
            status: "Approved",
          };
        }
        return service;
      });
      setServices(updatedServices);
      setShowModal(false);
    }
  };

  // Handle service rejection
  const rejectService = () => {
    if (selectedService && rejectionReason.trim()) {
      const updatedServices = services.map((service) => {
        if (service.id === selectedService) {
          return {
            ...service,
            status: "Rejected",
            rejectionReason: rejectionReason.trim(),
          };
        }
        return service;
      });
      setServices(updatedServices);
      setShowModal(false);
    }
  };

  // Get service by ID
  const getServiceById = (id) => {
    return services.find((s) => s.id === id) || null;
  };
  console.log(services, "asdfasdfasdfasdfasdfasfsdfsdafs");
  // Calculate service stats
  const totalServices = services.length;
  const approvedServices = services.filter(
    (s) => s.status === "approved"
  ).length;
  const pendingServices = services.filter((s) => s.status === "pending").length;
  const rejectedServices = services.filter(
    (s) => s.status === "rejected"
  ).length;
  const handleStatusChange = async (serviceId, newStatus) => {
    try {
      // Example: Send status update to backend
      const response = await updateServiceStatus(serviceId, newStatus);
      console.log("Response from status update:", response);
      if (!response.success) {
        throw new Error("Failed to update status");
      }

      // Optional: Update state locally after success
      setServices((prevServices) =>
        prevServices.map((service) =>
          service.id === serviceId ? { ...service, status: newStatus } : service
        )
      );

      setShowStatusPopup(null); // Close popup after update
    } catch (error) {
      console.error("Status update failed:", error.message);
      alert("Failed to change status. Please try again.");
    }
  };
  // Calculate showing range
  const startItem = (pagination.currentPage - 1) * pagination.itemsPerPage + 1;
  const endItem = Math.min(
    pagination.currentPage * pagination.itemsPerPage,
    pagination.totalItems
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-2xl font-bold text-indigo-600">EventPro</h1>
              </div>
            </div>

            <div className="flex items-center">
              <div className="ml-4 flex items-center md:ml-6">
                <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer">
                  <span className="sr-only">View notifications</span>
                  <i className="fas fa-bell text-lg"></i>
                </button>
                <div className="ml-3 relative">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center">
                      <span className="text-white font-medium">AD</span>
                    </div>
                    <span className="ml-2 text-gray-700">Admin</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">Admin Dashboard</h2>
          {/* <div className="flex space-x-3">
            <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 !rounded-button cursor-pointer whitespace-nowrap">
              <i className="fas fa-download mr-2"></i>
              Export Report
            </button>
          </div> */}
        </div>

        {/* Service Stats */}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-4 mb-6">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-indigo-100 rounded-md p-3">
                  <FaListAlt className="text-indigo-600 text-xl" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Total Services
                    </dt>
                    <dd>
                      <div className="text-lg font-medium text-gray-900">
                        {totalServices}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-green-100 rounded-md p-3">
                  <FaCheckCircle className="text-green-600 text-xl" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Approved Services
                    </dt>
                    <dd>
                      <div className="text-lg font-medium text-gray-900">
                        {approvedServices}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-yellow-100 rounded-md p-3">
                  <FaClock className="text-yellow-600 text-xl" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Pending Services
                    </dt>
                    <dd>
                      <div className="text-lg font-medium text-gray-900">
                        {pendingServices}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-red-100 rounded-md p-3">
                  <FaTimesCircle className="text-red-600 text-xl" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Rejected Services
                    </dt>
                    <dd>
                      <div className="text-lg font-medium text-gray-900">
                        {rejectedServices}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter controls */}
        <div className="bg-white p-4 shadow rounded-md mb-6">
          <div className="flex flex-wrap gap-4">
            <div className="w-64">
              <label
                htmlFor="status-filter"
                className="block text-sm font-medium text-gray-700"
              >
                Status
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-filter text-gray-400"></i>
                </div>
                <select
                  id="status-filter"
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-10 py-2 text-base border-gray-300 sm:text-sm rounded-md"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="all">All Statuses</option>
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>
            </div>
            <div className="w-64">
              <label
                htmlFor="category-filter"
                className="block text-sm font-medium text-gray-700"
              >
                Category
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-tag text-gray-400"></i>
                </div>
                <select
                  id="category-filter"
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-10 py-2 text-base border-gray-300 sm:text-sm rounded-md"
                  value={categoryFilter}
                  onChange={(e) =>
                    setCategoryFilter(e.target.value.toUpperCase())
                  }
                >
                  <option value="all">All Categories</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category.toLowerCase()}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {/* <div className="w-64">
              <label
                htmlFor="search"
                className="block text-sm font-medium text-gray-700"
              >
                Search
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-search text-gray-400"></i>
                </div>
                <input
                  type="text"
                  id="search"
                  className="focus:ring-indigo-500 text-black focus:border-indigo-500 block w-full pl-10 pr-10 py-2 text-sm border-gray-300 rounded-md"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="w-64">
              <label
                htmlFor="date-filter"
                className="block text-sm font-medium text-gray-700"
              >
                Submission Date
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-calendar-alt text-gray-400"></i>
                </div>
                <input
                  type="date"
                  id="date-filter"
                  className="focus:ring-indigo-500 text-black focus:border-indigo-500 block w-full pl-10 pr-10 py-2 text-sm border-gray-300 rounded-md"
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                />
              </div>
            </div> */}
          </div>
        </div>

        {/* Services table */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            {/* ... table header ... */}
            <tbody className="bg-white divide-y divide-gray-200">
              {loading ? (
                <tr>
                  <td colSpan="6" className="px-6 py-4 text-center">
                    Loading services...
                  </td>
                </tr>
              ) : services.length > 0 ? (
                services.map((service) => (
                  <tr key={service.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <img
                            className="h-10 w-10 rounded-md object-cover object-top"
                            src={service.images[0]}
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {service.title}
                          </div>
                          <div className="text-xs text-gray-500 truncate max-w-xs">
                            {service.description.substring(0, 60)}...
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {service.category}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        ${service.price.toLocaleString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          service.status === "approved"
                            ? "bg-green-100 text-green-800"
                            : service.status === "rejected"
                            ? "bg-red-100 text-red-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                        onClick={(e) => {
                          e.stopPropagation(), setShowStatusPopup(service.id);
                        }}
                      >
                        {service.status}
                      </span>

                      {/* Status change popup */}
                      <div className="relative inline-block">
                        <span
                          onClick={() => {
                            const allStatuses = [
                              "pending",
                              "approved",
                              "rejected",
                            ];
                            const availableStatuses = allStatuses.filter(
                              (s) => s.toLowerCase() !== service.status
                            );
                            setShowStatusPopup(
                              showStatusPopup === service.id
                                ? false
                                : service.id
                            );
                            setAvailableStatuses(availableStatuses);
                            setStatusPopupServiceId(service.id);
                          }}
                          className="ml-2 cursor-pointer underline text-xs text-indigo-500"
                          title="Change status"
                        >
                          edit{" "}
                        </span>

                        {showStatusPopup === service.id && (
                          <div
                            className="absolute z-10  mt-2 -right-32 -bottom-6  bg-white border border-gray-200 rounded shadow-lg min-w-[120px]"
                            style={{ zIndex: "1000!important" }}
                          >
                            {availableStatuses.map((status) => (
                              <button
                                key={status}
                                onClick={() => {
                                  handleStatusChange(service.id, status);
                                  setShowStatusPopup(false);
                                }}
                                className={`block w-full !z-50 text-left px-4 py-2 text-sm hover:bg-indigo-50 ${
                                  status === "approved"
                                    ? "text-green-700"
                                    : status === "rejected"
                                    ? "text-red-700"
                                    : "text-yellow-700"
                                }`}
                              >
                                {status}
                              </button>
                            ))}
                            <button
                              onClick={() => setShowStatusPopup(false)}
                              className="block w-full text-left px-4 py-2 text-xs text-gray-400 hover:bg-gray-50"
                            >
                              Cancel
                            </button>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {service.submissionDate || service.createdAt
                        ? new Date(
                            service.submissionDate || service.createdAt
                          ).toLocaleDateString()
                        : "N/A"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button
                        onClick={() => openReviewModal(service.id)}
                        className="text-indigo-600 hover:text-indigo-900 mr-3 cursor-pointer"
                        title="Review"
                      >
                        <i className="fas fa-eye"></i>
                      </button>
                      {service.status === "Pending" && (
                        <>
                          <button
                            onClick={() => openApproveModal(service.id)}
                            className="text-green-600 hover:text-green-900 mr-3 cursor-pointer"
                            title="Approve"
                          >
                            <i className="fas fa-check"></i>
                          </button>
                          <button
                            onClick={() => openRejectModal(service.id)}
                            className="text-red-600 hover:text-red-900 cursor-pointer"
                            title="Reject"
                          >
                            <i className="fas fa-times"></i>
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-6 py-4 text-center">
                    No services found matching your criteria
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6 mt-4 rounded-lg shadow">
          {/* ... mobile pagination ... */}

          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">{startItem}</span> to{" "}
                <span className="font-medium">{endItem}</span> of{" "}
                <span className="font-medium">{pagination.totalItems}</span>{" "}
                results
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                {/* First Page Button */}
                <button
                  onClick={() =>
                    setPagination((prev) => ({ ...prev, currentPage: 1 }))
                  }
                  disabled={!pagination.hasPreviousPage}
                  className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium ${
                    !pagination.hasPreviousPage
                      ? "text-gray-300 cursor-not-allowed"
                      : "text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  <FaAngleDoubleLeft className="text-xs" />
                </button>

                {/* Previous Page Button */}
                <button
                  onClick={() =>
                    setPagination((prev) => ({
                      ...prev,
                      currentPage: prev.currentPage - 1,
                    }))
                  }
                  disabled={!pagination.hasPreviousPage}
                  className={`relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium ${
                    !pagination.hasPreviousPage
                      ? "text-gray-300 cursor-not-allowed"
                      : "text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  <FaChevronLeft className="text-xs" />
                </button>

                {/* Page Numbers */}
                {Array.from(
                  { length: pagination.totalPages },
                  (_, i) => i + 1
                ).map((number) => (
                  <button
                    key={number}
                    onClick={() =>
                      setPagination((prev) => ({
                        ...prev,
                        currentPage: number,
                      }))
                    }
                    className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                      pagination.currentPage === number
                        ? "border-indigo-500 bg-indigo-50 text-indigo-600"
                        : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {number}
                  </button>
                ))}

                {/* Next Page Button */}
                <button
                  onClick={() =>
                    setPagination((prev) => ({
                      ...prev,
                      currentPage: prev.currentPage + 1,
                    }))
                  }
                  disabled={!pagination.hasNextPage}
                  className={`relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium ${
                    !pagination.hasNextPage
                      ? "text-gray-300 cursor-not-allowed"
                      : "text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  <FaChevronRight className="text-xs" />
                </button>

                {/* Last Page Button */}
                <button
                  onClick={() =>
                    setPagination((prev) => ({
                      ...prev,
                      currentPage: pagination.totalPages,
                    }))
                  }
                  disabled={!pagination.hasNextPage}
                  className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium ${
                    !pagination.hasNextPage
                      ? "text-gray-300 cursor-not-allowed"
                      : "text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  <FaAngleDoubleRight className="text-xs" />
                </button>
              </nav>
            </div>
          </div>
        </div>
      </main>

      {/* Modal */}
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full sm:p-6">
              {modalType === "review" && selectedService && (
                <div>
                  <div className="flex justify-between items-center mb-5">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Service Details
                    </h3>
                    <button
                      onClick={() => setShowModal(false)}
                      className="text-gray-400 hover:text-gray-500 cursor-pointer"
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-6">
                    <div className="sm:col-span-6">
                      <div className="bg-gray-50 p-4 rounded-md">
                        <h4 className="text-lg font-medium text-gray-900 mb-2">
                          {getServiceById(selectedService)?.title}
                        </h4>
                        <div className="flex items-center mb-2">
                          <span className="text-sm text-gray-500 mr-3">
                            Category:
                          </span>
                          <span className="text-sm font-medium text-gray-900">
                            {getServiceById(selectedService)?.category}
                          </span>
                        </div>
                        <div className="flex items-center mb-2">
                          <span className="text-sm text-gray-500 mr-3">
                            Price:
                          </span>
                          <span className="text-sm font-medium text-gray-900">
                            $
                            {getServiceById(
                              selectedService
                            )?.price.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex items-center mb-2">
                          <span className="text-sm text-gray-500 mr-3">
                            Status:
                          </span>
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              getServiceById(selectedService)?.status ===
                              "Approved"
                                ? "bg-green-100 text-green-800"
                                : getServiceById(selectedService)?.status ===
                                  "Rejected"
                                ? "bg-red-100 text-red-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {getServiceById(selectedService)?.status}
                          </span>
                        </div>
                        {getServiceById(selectedService)?.status ===
                          "Rejected" && (
                          <div className="mt-2 p-2 bg-red-50 rounded-md">
                            <span className="text-sm text-gray-500">
                              Rejection Reason:
                            </span>
                            <p className="mt-1 text-sm text-red-700">
                              {getServiceById(selectedService)?.rejectionReason}
                            </p>
                          </div>
                        )}
                        <div className="mt-3">
                          <span className="text-sm text-gray-500">
                            Description:
                          </span>
                          <p className="mt-1 text-sm text-gray-900">
                            {getServiceById(selectedService)?.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="sm:col-span-6">
                      <div className="bg-gray-50 p-4 rounded-md">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">
                          Service Features
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {getServiceById(selectedService)?.features.map(
                            (feature, index) => (
                              <div key={index} className="flex items-center">
                                <i className="fas fa-check text-green-500 mr-2"></i>
                                <span className="text-sm text-gray-700">
                                  {feature}
                                </span>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="sm:col-span-6">
                      <div className="bg-gray-50 p-4 rounded-md">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">
                          Terms & Conditions
                        </h4>
                        <p className="text-sm text-gray-700">
                          {getServiceById(selectedService)?.terms}
                        </p>
                      </div>
                    </div>

                    <div className="sm:col-span-6">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">
                        Service Images
                      </h4>
                      <div className="grid grid-cols-3 gap-4">
                        {getServiceById(selectedService)?.images.map(
                          (image, index) => (
                            <div key={index} className="relative">
                              <img
                                src={image}
                                alt=""
                                className="h-32 w-full object-cover object-top rounded-md"
                              />
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    <div className="sm:col-span-6 flex justify-between">
                      {getServiceById(selectedService)?.status ===
                        "Pending" && (
                        <>
                          <button
                            type="button"
                            onClick={() => {
                              setModalType("approve");
                            }}
                            className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:text-sm !rounded-button cursor-pointer whitespace-nowrap"
                          >
                            <i className="fas fa-check mr-2"></i>
                            Approve Service
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setModalType("reject");
                            }}
                            className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm !rounded-button cursor-pointer whitespace-nowrap"
                          >
                            <i className="fas fa-times mr-2"></i>
                            Reject Service
                          </button>
                        </>
                      )}
                      <button
                        type="button"
                        onClick={() => setShowModal(false)}
                        className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm !rounded-button cursor-pointer whitespace-nowrap"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {modalType === "approve" && selectedService && (
                <div>
                  <div className="flex justify-between items-center mb-5">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Approve Service
                    </h3>
                    <button
                      onClick={() => setShowModal(false)}
                      className="text-gray-400 hover:text-gray-500 cursor-pointer"
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </div>

                  <div className="bg-green-50 p-4 rounded-md mb-5">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <i className="fas fa-info-circle text-green-600"></i>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-green-800">
                          Confirmation
                        </h3>
                        <div className="mt-2 text-sm text-green-700">
                          <p>
                            Are you sure you want to approve "
                            {getServiceById(selectedService)?.title}"? This
                            service will be visible to all users after approval.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                    <button
                      type="button"
                      onClick={approveService}
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:col-start-2 sm:text-sm !rounded-button cursor-pointer whitespace-nowrap"
                    >
                      Approve
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm !rounded-button cursor-pointer whitespace-nowrap"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}

              {modalType === "reject" && selectedService && (
                <div>
                  <div className="flex justify-between items-center mb-5">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Reject Service
                    </h3>
                    <button
                      onClick={() => setShowModal(false)}
                      className="text-gray-400 hover:text-gray-500 cursor-pointer"
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </div>

                  <div className="bg-red-50 p-4 rounded-md mb-5">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <i className="fas fa-exclamation-triangle text-red-600"></i>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-red-800">
                          Rejection Information
                        </h3>
                        <div className="mt-2 text-sm text-red-700">
                          <p>
                            Please provide a reason for rejecting "
                            {getServiceById(selectedService)?.title}". This
                            information will be shared with the vendor.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="rejection-reason"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Rejection Reason
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="rejection-reason"
                        name="rejection-reason"
                        rows={4}
                        value={rejectionReason}
                        onChange={(e) => setRejectionReason(e.target.value)}
                        className="shadow-sm focus:ring-red-500 focus:border-red-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="Please explain why this service is being rejected..."
                        required
                      ></textarea>
                    </div>
                  </div>

                  <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                    <button
                      type="button"
                      onClick={rejectService}
                      disabled={!rejectionReason.trim()}
                      className={`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:col-start-2 sm:text-sm !rounded-button cursor-pointer whitespace-nowrap ${
                        !rejectionReason.trim()
                          ? "opacity-50 cursor-not-allowed"
                          : ""
                      }`}
                    >
                      Reject Service
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm !rounded-button cursor-pointer whitespace-nowrap"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-white mt-12">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-200 pt-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold text-indigo-600">EventPro</h3>
                <p className="text-sm text-gray-500 mt-1">Admin Dashboard</p>
              </div>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-500 cursor-pointer"
                >
                  <i className="fas fa-question-circle text-lg"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-500 cursor-pointer"
                >
                  <i className="fas fa-cog text-lg"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-500 cursor-pointer"
                >
                  <i className="fas fa-user-shield text-lg"></i>
                </a>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
              <div className="flex space-x-6 md:order-2">
                <div className="flex items-center">
                  <span className="text-sm text-gray-500">
                    System Version 2.5.0
                  </span>
                </div>
              </div>
              <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
                &copy; 2025 EventPro, Inc. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AdminHomePage;
