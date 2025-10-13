"use client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useCustomerForm from "./useCustomerForm";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "../ui/select";

const CustomerForm = () => {
  const { formData, errors, isLoading, handleChange, handleSubmit, setFormField } = useCustomerForm();

  return (
    <div className="flex justify-center items-center py-10">
      <form onSubmit={handleSubmit} className="bg-neutral-800 text-white p-8 rounded-3xl w-full max-w-2xl">
        <h2 className="text-center mb-6 text-xl font-semibold">Tell us about your home</h2>

        <div className="mb-4">
          <label className="block mb-2">Full name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-2 rounded-md bg-gray-200 text-black"
          />
          {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block mb-2">Email address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-gray-200 text-black"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label className="block mb-2">Phone number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-gray-200 text-black"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Street address</label>
          <input
            type="text"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleChange}
            className="w-full p-2 rounded-md bg-gray-200 text-black"
          />
          {errors.streetAddress && <p className="text-red-500 text-sm mt-1">{errors.streetAddress}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="mb-4">
            <label className="block mb-2">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-gray-200 text-black"
            />
            {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
          </div>
          <div className="mb-4">
            <label className="block mb-2">State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-gray-200 text-black"
            />
            {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
          </div>
          <div className="mb-4">
            <label className="block mb-2">ZIP</label>
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-gray-200 text-black"
            />
            {errors.zip && <p className="text-red-500 text-sm mt-1">{errors.zip}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block mb-2">Property type</label>
            <Select value={formData.propertyType} onValueChange={(v) => setFormField("propertyType", v)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select…" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Apartment">Apartment</SelectItem>
                <SelectItem value="House">House</SelectItem>
                <SelectItem value="Townhouse">Townhouse</SelectItem>
                <SelectItem value="Condo">Condo</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
            {errors.propertyType && <p className="text-red-500 text-sm mt-1">{errors.propertyType}</p>}
          </div>
          <div className="mb-4">
            <label className="block mb-2">Home size (sq ft or rooms)</label>
            <input
              type="text"
              name="homeSize"
              value={formData.homeSize}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-gray-200 text-black"
              placeholder="e.g., 1200 sq ft or 3 bedrooms"
            />
            {errors.homeSize && <p className="text-red-500 text-sm mt-1">{errors.homeSize}</p>}
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Current housekeeping situation</label>
          <textarea
            name="housekeepingSituation"
            value={formData.housekeepingSituation}
            onChange={handleChange}
            className="w-full p-2 rounded-md bg-gray-200 text-black"
            rows={3}
          />
          {errors.housekeepingSituation && (
            <p className="text-red-500 text-sm mt-1">{errors.housekeepingSituation}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block mb-2">Preferred service frequency</label>
            <Select value={formData.serviceFrequency} onValueChange={(v) => setFormField("serviceFrequency", v)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select…" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Weekly">Weekly</SelectItem>
                <SelectItem value="Bi-weekly">Bi-weekly</SelectItem>
                <SelectItem value="Monthly">Monthly</SelectItem>
                <SelectItem value="One-time">One-time</SelectItem>
              </SelectContent>
            </Select>
            {errors.serviceFrequency && <p className="text-red-500 text-sm mt-1">{errors.serviceFrequency}</p>}
          </div>
          <div className="mb-4">
            <label className="block mb-2">How did you hear about us?</label>
            <Select value={formData.heardAboutUs} onValueChange={(v) => setFormField("heardAboutUs", v)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select…" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Google">Google</SelectItem>
                <SelectItem value="Referral">Referral</SelectItem>
                <SelectItem value="Social media">Social media</SelectItem>
                <SelectItem value="Flyer / Event">Flyer / Event</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
            {errors.heardAboutUs && <p className="text-red-500 text-sm mt-1">{errors.heardAboutUs}</p>}
          </div>
        </div>

        <div className="mb-6">
          <label className="block mb-2">Any special requirements or requests</label>
          <textarea
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleChange}
            className="w-full p-2 rounded-md bg-gray-200 text-black"
            rows={4}
          />
          {errors.specialRequests && <p className="text-red-500 text-sm mt-1">{errors.specialRequests}</p>}
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-neutral-700 rounded-xl text-white transition flex items-center justify-center"
          disabled={isLoading}
        >
          {isLoading ? (
            <svg
              className="animate-spin h-5 w-5 mr-2 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v3a5 5 0 00-5 5H4z"
              ></path>
            </svg>
          ) : (
            "Submit"
          )}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default CustomerForm;
