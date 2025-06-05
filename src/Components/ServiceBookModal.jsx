import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BsX } from "react-icons/bs";

const ServiceBookModal = ({ closeBookingForm, service }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const yyyy = date.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
  };
  const onSubmit = async (data) => {
    try {
      const formattedData = {
        ...data,
        dateFrom: formatDate(data.dateFrom),
        dateTo: formatDate(data.dateTo),
        guestCount: parseInt(data.guestCount, 10),
      };

      const response = await fetch(
        `http://localhost:5050/api/services/${service.id}/book`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formattedData),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        console.error("Booking failed:", result);
        toast.error(result.message || "Failed to book the service");
        return;
      }

      toast.success("Booking successful!");
      closeBookingForm();
    } catch (error) {
      console.error("Booking error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };
  console.log("selectedVenue", service);
  return (
    <div>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen px-4">
          <div
            className="fixed inset-0 text-black bg-black opacity-50"
            onClick={closeBookingForm}
          ></div>
          <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full p-6 z-10">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Book {service.title}
                </h3>
                <button
                  type="button"
                  onClick={closeBookingForm}
                  className="text-gray-900 hover:text-gray-500 !rounded-button whitespace-nowrap cursor-pointer"
                >
                  <BsX size={28} />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="dateFrom"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Start Date *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <i className="fas fa-calendar-alt text-gray-400"></i>
                    </div>
                    <input
                      type="date"
                      id="dateFrom"
                      {...register("dateFrom", {
                        required: "Start date is required",
                      })}
                      className="pl-10 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                  {errors.dateFrom && (
                    <span className="text-red-500 text-sm mt-1">
                      {errors.dateFrom.message}
                    </span>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="dateTo"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    End Date *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <i className="fas fa-calendar-alt text-gray-400"></i>
                    </div>
                    <input
                      type="date"
                      id="dateTo"
                      {...register("dateTo", {
                        required: "End date is required",
                      })}
                      className="pl-10 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                  {errors.dateTo && (
                    <span className="text-red-500 text-sm mt-1">
                      {errors.dateTo.message}
                    </span>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="guestCount"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Number of Guests *
                  </label>
                  <input
                    type="number"
                    id="guestCount"
                    min="1"
                    {...register("guestCount", {
                      required: "Number of guests is required",
                    })}
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                  {errors.guestCount && (
                    <span className="text-red-500 text-sm mt-1">
                      {errors.guestCount.message}
                    </span>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="packageType"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Package Type *
                  </label>
                  <select
                    id="packageType"
                    {...register("packageType", {
                      required: "Package type is required",
                    })}
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  >
                    <option value="">Select package type</option>
                    <option value="standard">Standard</option>
                    <option value="premium">Premium</option>
                    <option value="vip">VIP</option>
                  </select>
                  {errors.packageType && (
                    <span className="text-red-500 text-sm mt-1">
                      {errors.packageType.message}
                    </span>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="customerName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="customerName"
                    {...register("customerName", {
                      required: "Name is required",
                    })}
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                  {errors.customerName && (
                    <span className="text-red-500 text-sm mt-1">
                      {errors.customerName.message}
                    </span>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="customerEmail"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="customerEmail"
                    {...register("customerEmail", {
                      required: "Email address is required",
                    })}
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                  {errors.customerEmail && (
                    <span className="text-red-500 text-sm mt-1">
                      {errors.customerEmail.message}
                    </span>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="customerPhone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="customerPhone"
                    {...register("customerPhone", {
                      required: "Phone number is required",
                    })}
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                  {errors.customerPhone && (
                    <span className="text-red-500 text-sm mt-1">
                      {errors.customerPhone.message}
                    </span>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="notes"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Additional Notes *
                  </label>
                  <textarea
                    id="notes"
                    rows={3}
                    {...register("notes", {
                      required: "Additional notes are required",
                    })}
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Any special requirements or questions"
                  ></textarea>
                  {errors.notes && (
                    <span className="text-red-500 text-sm mt-1">
                      {errors.notes.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition !rounded-button whitespace-nowrap cursor-pointer"
                >
                  Submit Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBookModal;
