import React, { useEffect, useState } from "react";
import { getVendorServices, deleteVendorService } from "../Api/venderApi";
import Modal from "./VendorComponents/Modal";
import {
  FaEdit,
  FaTrashAlt,
  FaFilter,
  FaTag,
  FaSearch,
  FaBell,
  FaPlus,
  FaChevronLeft,
  FaChevronRight,
  FaCheckCircle,
  FaClock,
  FaTimesCircle,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcApplePay,
} from "react-icons/fa";

const VendorHomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [servicesPerPage] = useState(10);
  const [services, setServices] = useState([]);
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
  const [searchQuery, setSearchQuery] = useState("");

  // State for form
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    price: "",
    description: "",
    features: [],
    terms: "",
    images: [],
  });

  // State for modal
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("add");
  const [selectedService, setSelectedService] = useState(null);

  // Categories
  const categories = [
    "Photography",
    "Catering",
    "Venue",
    "Entertainment",
    "Decoration",
    "Transportation",
    "Accommodation",
    "INVITATIONS",
  ];

  // Feature options
  const featureOptions = [
    "Setup & Cleanup Included",
    "Premium Package Available",
    "Last-Minute Booking Accepted",
    "Customization Available",
    "Free Consultation",
    "Delivery Included",
    "Insurance Coverage",
    "Backup Equipment",
    "Feature 1",
    "Feature 2",
    "Feature 3",
    "Feature 4",
    "Feature 5",
  ];

  useEffect(() => {
    const token = localStorage.getItem("vendorjwtToken");
    if (!token) {
      window.location.href = "/login";
    }
  }, []);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await getVendorServices(currentPage, servicesPerPage);
        setServices(response.data || []);
        setPagination(
          response.pagination || {
            currentPage: 1,
            totalPages: 1,
            totalItems: 0,
            itemsPerPage: servicesPerPage,
            hasNextPage: false,
            hasPreviousPage: false,
          }
        );
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchServices();
  }, [currentPage, servicesPerPage]);

  // Filter services based on status, category, and search query
  const filteredServices = services.filter((service) => {
    const matchesStatus =
      statusFilter === "all" || service.status.toLowerCase() === statusFilter;
    const matchesCategory =
      categoryFilter === "all" ||
      service.category.toLowerCase() === categoryFilter.toLowerCase();
    const matchesSearch =
      searchQuery === "" ||
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesCategory && matchesSearch;
  });

  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= pagination.totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle filter changes
  const handleStatusFilterChange = (e) => {
    setStatusFilter(e.target.value);
    setCurrentPage(1); // Reset to first page on filter change
  };

  const handleCategoryFilterChange = (e) => {
    setCategoryFilter(e.target.value);
    setCurrentPage(1); // Reset to first page on filter change
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page on search change
  };

  // Handle checkbox change
  const handleCheckboxChange = (feature) => {
    const updatedFeatures = [...formData.features];
    if (updatedFeatures.includes(feature)) {
      const index = updatedFeatures.indexOf(feature);
      updatedFeatures.splice(index, 1);
    } else {
      updatedFeatures.push(feature);
    }
    setFormData({
      ...formData,
      features: updatedFeatures,
    });
  };

  // Open add service modal
  const openAddModal = () => {
    setFormData({
      title: "",
      category: "",
      price: "",
      description: "",
      features: [],
      terms: "",
      images: [],
    });
    setModalType("add");
    setShowModal(true);
  };

  // Open edit service modal
  const openEditModal = (id) => {
    const service = services.find((s) => s.id === id);
    if (service) {
      setFormData({
        title: service.title,
        category: service.category,
        price: service.price.toString(),
        description: service.description,
        features: [...service.features],
        terms: service.terms,
        images: [...service.images],
      });
      setSelectedService(id);
      setModalType("edit");
      setShowModal(true);
    }
  };

  // Handle service deletion
  const deleteService = async (id) => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      try {
        await deleteVendorService(id);
        // Remove the deleted service from state
        setServices(services.filter((service) => service.id !== id));
      } catch (error) {
        console.error("Error deleting service:", error);
      }
    }
  };

  // Mock image upload
  const handleImageUpload = () => {
    const newImage = `https://res.cloudinary.com/dzcfl3qpw/image/upload/v1749013838/event_services/mpfxycqnzb1yhsbjk7uc.jpg`;

    setFormData({
      ...formData,
      images: [...formData.images, newImage],
    });
  };

  // Remove image
  const removeImage = (index) => {
    const updatedImages = [...formData.images];
    updatedImages.splice(index, 1);
    setFormData({
      ...formData,
      images: updatedImages,
    });
  };

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
                  <FaBell className="text-lg" />
                </button>
                <div className="ml-3 relative">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center">
                      <span className="text-white font-medium">JD</span>
                    </div>
                    <span className="ml-2 text-gray-700">John Doe</span>
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
          <h2 className="text-2xl font-bold text-gray-900">Vendor Dashboard</h2>
          <button
            onClick={openAddModal}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 !rounded-button cursor-pointer whitespace-nowrap"
          >
            <FaPlus className="mr-2" />
            Add New Service
          </button>
        </div>

        {/* Service Stats */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 mb-6">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-indigo-100 rounded-md p-3">
                  <FaCheckCircle className="text-indigo-600 text-xl" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Approved Services
                    </dt>
                    <dd>
                      <div className="text-lg font-medium text-gray-900">
                        {services.filter((s) => s.status === "approved").length}
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
                        {services.filter((s) => s.status === "pending").length}
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
                        {services.filter((s) => s.status === "rejected").length}
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
                  <FaFilter className="text-gray-400" />
                </div>
                <select
                  id="status-filter"
                  className="focus:ring-indigo-500 text-black focus:border-indigo-500 block w-full pl-10 pr-10 py-2 text-base border-gray-300 sm:text-sm rounded-md"
                  value={statusFilter}
                  onChange={handleStatusFilterChange}
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
                  <FaTag className="text-gray-400" />
                </div>
                <select
                  id="category-filter"
                  className="focus:ring-indigo-500 text-black focus:border-indigo-500 block w-full pl-10 pr-10 py-2 text-base border-gray-300 sm:text-sm rounded-md"
                  value={categoryFilter}
                  onChange={handleCategoryFilterChange}
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
                  <FaSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  id="search"
                  className="focus:ring-indigo-500 text-black focus:border-indigo-500 block w-full pl-10 pr-10 py-2 text-sm border-gray-300 rounded-md"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>
            </div> */}
          </div>
        </div>

        {/* Services table */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Service
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Category
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Price
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Submission Date
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredServices.map((service) => (
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
                      {service.currency} {service.price.toLocaleString()}
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
                    >
                      {service.status.charAt(0).toUpperCase() +
                        service.status.slice(1)}
                    </span>
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
                      onClick={() => openEditModal(service.id)}
                      className="text-indigo-600 hover:text-indigo-900 mr-3 cursor-pointer"
                      title="Edit"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => deleteService(service.id)}
                      className="text-red-600 hover:text-red-900 cursor-pointer"
                      title="Delete"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6 mt-4 rounded-lg shadow">
          <div className="flex-1 flex justify-between sm:hidden">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={!pagination.hasPreviousPage}
              className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md ${
                !pagination.hasPreviousPage
                  ? "bg-gray-100 text-gray-400"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              Previous
            </button>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={!pagination.hasNextPage}
              className={`ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md ${
                !pagination.hasNextPage
                  ? "bg-gray-100 text-gray-400"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              Next
            </button>
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing{" "}
                <span className="font-medium">
                  {(currentPage - 1) * servicesPerPage + 1}
                </span>{" "}
                to{" "}
                <span className="font-medium">
                  {Math.min(
                    currentPage * servicesPerPage,
                    pagination.totalItems
                  )}
                </span>{" "}
                of <span className="font-medium">{pagination.totalItems}</span>{" "}
                results
              </p>
            </div>
            <div>
              <nav
                className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                aria-label="Pagination"
              >
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={!pagination.hasPreviousPage}
                  className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 text-sm font-medium ${
                    !pagination.hasPreviousPage
                      ? "bg-gray-100 text-gray-400"
                      : "bg-white text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  <span className="sr-only">Previous</span>
                  <FaChevronLeft className="text-xs" />
                </button>

                {Array.from(
                  { length: pagination.totalPages },
                  (_, i) => i + 1
                ).map((number) => (
                  <button
                    key={number}
                    onClick={() => paginate(number)}
                    className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                      number === currentPage
                        ? "border-indigo-500 bg-indigo-50 text-indigo-600"
                        : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {number}
                  </button>
                ))}

                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={!pagination.hasNextPage}
                  className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 text-sm font-medium ${
                    !pagination.hasNextPage
                      ? "bg-gray-100 text-gray-400"
                      : "bg-white text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  <span className="sr-only">Next</span>
                  <FaChevronRight className="text-xs" />
                </button>
              </nav>
            </div>
          </div>
        </div>
      </main>

      {/* Modal */}
      {showModal && (
        <Modal
          services={services}
          formData={formData}
          modalType={modalType}
          setFormData={setFormData}
          selectedService={selectedService}
          setShowModal={setShowModal}
          setServices={setServices}
        />
      )}

      {/* Footer */}
      <footer className="bg-white mt-12">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-200 pt-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold text-indigo-600">EventPro</h3>
                <p className="text-sm text-gray-500 mt-1">
                  The ultimate event service marketplace
                </p>
              </div>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-500 cursor-pointer"
                >
                  <FaFacebookF className="text-lg" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-500 cursor-pointer"
                >
                  <FaTwitter className="text-lg" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-500 cursor-pointer"
                >
                  <FaInstagram className="text-lg" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-500 cursor-pointer"
                >
                  <FaLinkedinIn className="text-lg" />
                </a>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Services
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900 cursor-pointer"
                    >
                      Photography
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900 cursor-pointer"
                    >
                      Catering
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900 cursor-pointer"
                    >
                      Venues
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900 cursor-pointer"
                    >
                      Entertainment
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Support
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900 cursor-pointer"
                    >
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900 cursor-pointer"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900 cursor-pointer"
                    >
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900 cursor-pointer"
                    >
                      Community
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900 cursor-pointer"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900 cursor-pointer"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900 cursor-pointer"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900 cursor-pointer"
                    >
                      Press
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Legal
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900 cursor-pointer"
                    >
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900 cursor-pointer"
                    >
                      Terms
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900 cursor-pointer"
                    >
                      Cookie Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900 cursor-pointer"
                    >
                      Licenses
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
              <div className="flex space-x-6 md:order-2">
                <div className="flex items-center">
                  <FaCcVisa className="text-gray-400 text-2xl mr-2" />
                  <FaCcMastercard className="text-gray-400 text-2xl mr-2" />
                  <FaCcPaypal className="text-gray-400 text-2xl mr-2" />
                  <FaCcApplePay className="text-gray-400 text-2xl" />
                </div>
              </div>
              <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
                © 2025 EventPro, Inc. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VendorHomePage;
