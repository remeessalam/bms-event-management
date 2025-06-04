import { useForm } from "react-hook-form";
import { useState } from "react";
import { addVendorService } from "../../Api/venderApi";

const Modal = ({
  services,
  formData,
  setFormData,
  selectedService,
  setShowModal,
  setServices,
  modalType,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
    reset,
    watch,
    setValue,
  } = useForm({
    defaultValues: {
      title: formData.title || "",
      description: formData.description || "",
      category: formData.category || "",
      price: formData.price || "",
      pricingModel: formData.pricingModel || "PER_EVENT",
      features: formData.features || [],
      terms: formData.terms || "",
      images: formData.images || [],
    },
  });

  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState("");
  const watchedImages = watch("images");

  // Categories
  const categories = [
    "CATRING",
    "DECORATION",
    "PHOTOGRAPHY",
    "SOUND_DJ",
    "VENUS",
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
  ];

  const onSubmit = async (data) => {
    setSubmitError("");
    setSubmitSuccess("");
    console.log(data.features, "asdfasdfsdf");
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("title", data.title);
      formDataToSend.append("description", data.description);
      formDataToSend.append("category", data.category);
      formDataToSend.append("price", data.price);
      formDataToSend.append("pricingModel", data.pricingModel);
      formDataToSend.append("features", JSON.stringify(data.features));

      formDataToSend.append("terms", data.terms);

      if (data.images && data.images.length > 0) {
        Array.from(data.images).forEach((file) => {
          formDataToSend.append("images", file);
        });
      }

      const response = await addVendorService(formDataToSend);

      if (!response.su) {
        throw new Error("Failed to submit service");
      }

      const result = await response.json();
      setSubmitSuccess("Service submitted successfully!");
      reset();
      setShowModal(false);
    } catch (err) {
      setSubmitError(err.message || "Submission failed");
    }
  };

  const handleImageChange = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setValue("images", Array.from(files));
    }
  };

  const removeImage = (index) => {
    const currentImages = watch("images");
    const updatedImages = [...currentImages];
    updatedImages.splice(index, 1);
    setValue("images", updatedImages);
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        ></span>

        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full sm:p-6">
          {modalType === "add" || modalType === "edit" ? (
            <div>
              <div className="flex justify-between items-center mb-5">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  {modalType === "add" ? "Add New Service" : "Edit Service"}
                </h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-500 cursor-pointer"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium text-black mb-2"
                    >
                      Service Title
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="title"
                        {...register("title", {
                          required: "Service title is required",
                        })}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md h-12 px-4 text-black placeholder-gray-500"
                        placeholder="Enter service title"
                      />
                      {errors.title && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.title.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="category"
                      className="block text-sm font-medium text-black mb-2"
                    >
                      Category
                    </label>
                    <div className="mt-1">
                      <select
                        id="category"
                        {...register("category", {
                          required: "Category is required",
                        })}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md h-12 px-4 text-black"
                      >
                        <option value="">Select a category</option>
                        {categories.map((category, index) => (
                          <option key={index} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                      {errors.category && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.category.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium text-black mb-2"
                    >
                      Base Price ($)
                    </label>
                    <div className="mt-1">
                      <input
                        type="number"
                        id="price"
                        {...register("price", {
                          required: "Price is required",
                          min: { value: 0, message: "Price must be positive" },
                        })}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md h-12 px-4 text-black placeholder-gray-500"
                        placeholder="Enter price"
                      />
                      {errors.price && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.price.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="pricingModel"
                      className="block text-sm font-medium text-black mb-2"
                    >
                      Pricing Model
                    </label>
                    <div className="mt-1">
                      <select
                        id="pricingModel"
                        {...register("pricingModel", {
                          required: "Pricing model is required",
                        })}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md h-12 px-4 text-black"
                      >
                        <option value="PER_EVENT">Per Event</option>
                        <option value="PER_HOUR">Per Hour</option>
                        <option value="PER_DAY">Per Day</option>
                        <option value="PER_PERSON">Per Person</option>
                      </select>
                      {errors.pricingModel && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.pricingModel.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="sm:col-span-6">
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-black mb-2"
                    >
                      Service Description
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="description"
                        rows={5}
                        {...register("description", {
                          required: "Description is required",
                        })}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md px-4 py-3 text-black placeholder-gray-500"
                        placeholder="Describe your service in detail..."
                      ></textarea>
                      {errors.description && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.description.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="sm:col-span-6">
                    <label className="block text-sm font-medium text-black mb-3">
                      Service Features
                    </label>
                    <div className="mt-2 grid grid-cols-1 gap-y-3 sm:grid-cols-2 gap-x-4">
                      {featureOptions.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id={`feature-${index}`}
                              type="checkbox"
                              value={feature}
                              {...register("features")}
                              className="focus:ring-indigo-500 h-5 w-5 text-indigo-600 border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor={`feature-${index}`}
                              className="font-medium text-black"
                            >
                              {feature}
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="sm:col-span-6">
                    <label
                      htmlFor="terms"
                      className="block text-sm font-medium text-black mb-2"
                    >
                      Terms & Conditions
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="terms"
                        rows={4}
                        {...register("terms", {
                          required: "Terms are required",
                        })}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md px-4 py-3 text-black placeholder-gray-500"
                        placeholder="Enter terms and conditions..."
                      ></textarea>
                      {errors.terms && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.terms.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="sm:col-span-6">
                    <label className="block text-sm font-medium text-black mb-2">
                      Service Images
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <i className="fas fa-image text-gray-400 text-3xl mb-2"></i>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <span>Upload images</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              multiple
                              onChange={handleImageChange}
                              className="sr-only"
                              accept="image/*"
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, GIF up to 5MB
                        </p>
                      </div>
                    </div>

                    {watchedImages && watchedImages.length > 0 && (
                      <div className="mt-4 grid grid-cols-3 gap-4">
                        {watchedImages.map((image, index) => (
                          <div key={index} className="relative">
                            <img
                              src={
                                image instanceof File
                                  ? URL.createObjectURL(image)
                                  : image
                              }
                              alt=""
                              className="h-24 w-full object-cover object-top rounded-md"
                            />
                            <button
                              type="button"
                              onClick={() => removeImage(index)}
                              className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 focus:outline-none cursor-pointer"
                            >
                              <i className="fas fa-times text-xs"></i>
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {submitError && (
                  <div className="mt-4 text-sm text-red-600">{submitError}</div>
                )}
                {submitSuccess && (
                  <div className="mt-4 text-sm text-green-600">
                    {submitSuccess}
                  </div>
                )}

                <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm !rounded-button cursor-pointer whitespace-nowrap"
                  >
                    {isSubmitting
                      ? "Submitting..."
                      : modalType === "add"
                      ? "Submit for Review"
                      : "Save Changes"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm !rounded-button cursor-pointer whitespace-nowrap"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          ) : (
            modalType === "reject" && (
              <div>
                {/* Existing view-only modal content remains the same */}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
