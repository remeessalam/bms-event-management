// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState } from "react";

const AdminHomePage = () => {
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
      rejectionReason: "Insufficient details about equipment requirements.",
    },
  ]);

  // State for selected service
  const [selectedService, setSelectedService] = useState(null);

  // State for modal
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("review");
  // State for rejection reason
  const [rejectionReason, setRejectionReason] = useState("");

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
          <div className="flex space-x-3">
            <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 !rounded-button cursor-pointer whitespace-nowrap">
              <i className="fas fa-download mr-2"></i>
              Export Report
            </button>
          </div>
        </div>

        {/* Service Stats */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-4 mb-6">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-indigo-100 rounded-md p-3">
                  <i className="fas fa-list-alt text-indigo-600 text-xl"></i>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Total Services
                    </dt>
                    <dd>
                      <div className="text-lg font-medium text-gray-900">
                        {services.length}
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
                  <i className="fas fa-check-circle text-green-600 text-xl"></i>
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
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-10 py-2 text-base border-gray-300 sm:text-sm rounded-md"
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
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-10 py-2 text-sm border-gray-300 rounded-md"
                  placeholder="Search services..."
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
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-10 py-2 text-sm border-gray-300 rounded-md"
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
              {services.map((service) => (
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
                    {service.submissionDate}
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
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6 mt-4 rounded-lg shadow">
          <div className="flex-1 flex justify-between sm:hidden">
            <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 !rounded-button cursor-pointer whitespace-nowrap">
              Previous
            </button>
            <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 !rounded-button cursor-pointer whitespace-nowrap">
              Next
            </button>
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to{" "}
                <span className="font-medium">{services.length}</span> of{" "}
                <span className="font-medium">{services.length}</span> results
              </p>
            </div>
            <div>
              <nav
                className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                aria-label="Pagination"
              >
                <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-pointer">
                  <span className="sr-only">Previous</span>
                  <i className="fas fa-chevron-left text-xs"></i>
                </button>
                <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer">
                  1
                </button>
                <button className="relative inline-flex items-center px-4 py-2 border border-indigo-500 bg-indigo-50 text-sm font-medium text-indigo-600 cursor-pointer">
                  2
                </button>
                <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer">
                  3
                </button>
                <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-pointer">
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
