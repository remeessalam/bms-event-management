import React, { useEffect, useState } from "react";
import { getVendorServices } from "../Api/venderApi";
import Modal from "./VendorComponents/Modal";

const VendorHomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [servicesPerPage] = useState(5);
  // State for services
  const [services, setServices] = useState([
    {
      id: 1,
      title: "Wedding Photography",
      category: "Photography",
      price: 1200,
      status: "Approved",
      description:
        "Professional wedding photography services with multiple packages available.",
      images: [
        "https://readdy.ai/api/search-image?query=professional%20wedding%20photography%20scene%20with%20elegant%20couple%20in%20garden%20setting%2C%20soft%20natural%20lighting%2C%20high-end%20camera%20equipment%20visible%2C%20romantic%20atmosphere%2C%20professional%20photography%20session%20in%20progress%2C%20beautiful%20outdoor%20setting&width=600&height=400&seq=1&orientation=landscape",
      ],
      features: ["4K Video", "Drone Shots", "Photo Album", "Online Gallery"],
      terms:
        "Booking requires 50% advance payment. Cancellation policy applies.",
      submissionDate: "2025-05-10",
    },
    {
      id: 2,
      title: "Corporate Event Catering",
      category: "Catering",
      price: 2500,
      status: "Pending",
      description:
        "Premium catering service for corporate events with customizable menu options.",
      images: [
        "https://readdy.ai/api/search-image?query=elegant%20corporate%20catering%20setup%20with%20professional%20staff%20serving%20gourmet%20appetizers%2C%20corporate%20event%20setting%2C%20professional%20catering%20display%20with%20high-end%20food%20presentation%2C%20business%20atmosphere%2C%20clean%20modern%20aesthetic&width=600&height=400&seq=2&orientation=landscape",
      ],
      features: [
        "Custom Menu",
        "Staff Included",
        "Setup & Cleanup",
        "Premium Dinnerware",
      ],
      terms: "Minimum 50 guests. Final headcount required 7 days before event.",
      submissionDate: "2025-05-15",
    },
    {
      id: 3,
      title: "Live Band Performance",
      category: "Entertainment",
      price: 1800,
      status: "Rejected",
      description:
        "Professional 5-piece band performing popular hits for your special event.",
      images: [
        "https://readdy.ai/api/search-image?query=professional%20live%20band%20performing%20on%20stage%20with%20high%20quality%20instruments%2C%20concert%20lighting%2C%20energetic%20performance%2C%20event%20entertainment%20setting%2C%20professional%20musicians%20in%20coordinated%20outfits%2C%20vibrant%20stage%20atmosphere&width=600&height=400&seq=3&orientation=landscape",
      ],
      features: [
        "3-Hour Performance",
        "Sound Equipment",
        "Song Requests",
        "MC Services",
      ],
      terms:
        "Requires stage area of minimum 15x10 feet. Power outlets must be provided.",
      submissionDate: "2025-05-12",
    },
  ]);
  // State for filters
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (!token) {
      window.location.href = "/login";
    }
  }, []);
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const services = await getVendorServices();
        setServices(services || []);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchServices();
  }, []);
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
  ];

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

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  // Calculate current services to display
  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = filteredServices.slice(
    indexOfFirstService,
    indexOfLastService
  );

  // Calculate total pages
  const totalPages = Math.ceil(filteredServices.length / servicesPerPage);

  // Generate page numbers for pagination
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
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

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (modalType === "add") {
      // Add new service
      const newService = {
        id: services.length + 1,
        title: formData.title,
        category: formData.category,
        price: parseInt(formData.price),
        status: "Pending",
        description: formData.description,
        features: formData.features,
        terms: formData.terms,
        images:
          formData.images.length > 0
            ? formData.images
            : [
                "https://readdy.ai/api/search-image?query=professional%20event%20service%20generic%20placeholder%20image%20with%20modern%20minimal%20design%2C%20neutral%20background%2C%20event%20management%20concept%2C%20professional%20business%20aesthetic%2C%20clean%20composition&width=600&height=400&seq=4&orientation=landscape",
              ],
        submissionDate: new Date().toISOString().split("T")[0],
      };
      setServices([...services, newService]);
    } else if (modalType === "edit" && selectedService) {
      // Update existing service
      const updatedServices = services.map((service) => {
        if (service.id === selectedService) {
          return {
            ...service,
            title: formData.title,
            category: formData.category,
            price: parseInt(formData.price),
            description: formData.description,
            features: formData.features,
            terms: formData.terms,
            images:
              formData.images.length > 0 ? formData.images : service.images,
            status: "Pending", // Reset to pending after edit
          };
        }
        return service;
      });
      setServices(updatedServices);
    }

    setShowModal(false);
  };

  // Handle service deletion
  const deleteService = (id) => {
    if (confirm("Are you sure you want to delete this service?")) {
      const updatedServices = services.filter((service) => service.id !== id);
      setServices(updatedServices);
    }
  };

  // Mock image upload
  const handleImageUpload = () => {
    const newImage = `https://readdy.ai/api/search-image?query=professional%20event%20service%20generic%20placeholder%20image%20with%20modern%20minimal%20design%2C%20neutral%20background%2C%20event%20management%20concept%2C%20professional%20business%20aesthetic%2C%20clean%20composition&width=600&height=400&seq=${Date.now()}&orientation=landscape`;

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
                  <i className="fas fa-bell text-lg"></i>
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
            <i className="fas fa-plus mr-2"></i>
            Add New Service
          </button>
        </div>

        {/* Service Stats */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 mb-6">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-indigo-100 rounded-md p-3">
                  <i className="fas fa-check-circle text-indigo-600 text-xl"></i>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Approved Services
                    </dt>
                    <dd>
                      <div className="text-lg font-medium text-gray-900">
                        {services.filter((s) => s.status === "Approved").length}
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
                  <i className="fas fa-clock text-yellow-600 text-xl"></i>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Pending Services
                    </dt>
                    <dd>
                      <div className="text-lg font-medium text-gray-900">
                        {services.filter((s) => s.status === "Pending").length}
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
                  <i className="fas fa-times-circle text-red-600 text-xl"></i>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Rejected Services
                    </dt>
                    <dd>
                      <div className="text-lg font-medium text-gray-900">
                        {services.filter((s) => s.status === "Rejected").length}
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
                  <i className="fas fa-tag text-gray-400"></i>
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
            <div className="w-64">
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
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>
            </div>
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
              {currentServices.map((service) => (
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
                        service.status === "Approved"
                          ? "bg-green-100 text-green-800"
                          : service.status === "Rejected"
                          ? "bg-red-100 text-red-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {service.status}
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
                      <i className="fas fa-edit"></i>
                    </button>
                    <button
                      onClick={() => deleteService(service.id)}
                      className="text-red-600 hover:text-red-900 cursor-pointer"
                      title="Delete"
                    >
                      <i className="fas fa-trash-alt"></i>
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
              onClick={() => paginate(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md ${
                currentPage === 1
                  ? "bg-gray-100 text-gray-400"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              Previous
            </button>
            <button
              onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className={`ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md ${
                currentPage === totalPages
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
                <span className="font-medium">{indexOfFirstService + 1}</span>{" "}
                to{" "}
                <span className="font-medium">
                  {Math.min(indexOfLastService, filteredServices.length)}
                </span>{" "}
                of{" "}
                <span className="font-medium">{filteredServices.length}</span>{" "}
                results
              </p>
            </div>
            <div>
              <nav
                className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                aria-label="Pagination"
              >
                <button
                  onClick={() => paginate(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 text-sm font-medium ${
                    currentPage === 1
                      ? "bg-gray-100 text-gray-400"
                      : "bg-white text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  <span className="sr-only">Previous</span>
                  <i className="fas fa-chevron-left text-xs"></i>
                </button>

                {pageNumbers.map((number) => (
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
                  onClick={() =>
                    paginate(Math.min(totalPages, currentPage + 1))
                  }
                  disabled={currentPage === totalPages}
                  className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 text-sm font-medium ${
                    currentPage === totalPages
                      ? "bg-gray-100 text-gray-400"
                      : "bg-white text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  <span className="sr-only">Next</span>
                  <i className="fas fa-chevron-right text-xs"></i>
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
                  <i className="fab fa-facebook-f text-lg"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-500 cursor-pointer"
                >
                  <i className="fab fa-twitter text-lg"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-500 cursor-pointer"
                >
                  <i className="fab fa-instagram text-lg"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-500 cursor-pointer"
                >
                  <i className="fab fa-linkedin-in text-lg"></i>
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
                  <i className="fab fa-cc-visa text-gray-400 text-2xl mr-2"></i>
                  <i className="fab fa-cc-mastercard text-gray-400 text-2xl mr-2"></i>
                  <i className="fab fa-cc-paypal text-gray-400 text-2xl mr-2"></i>
                  <i className="fab fa-cc-apple-pay text-gray-400 text-2xl"></i>
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
