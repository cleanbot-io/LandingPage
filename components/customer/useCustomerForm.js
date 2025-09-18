import { useState } from "react";
import { toast } from "react-toastify";
import { createCustomerInquiry } from "./customerService";

const initialState = {
  fullName: "",
  email: "",
  phone: "",
  streetAddress: "",
  city: "",
  state: "",
  zip: "",
  propertyType: "",
  homeSize: "",
  housekeepingSituation: "",
  serviceFrequency: "",
  specialRequests: "",
  heardAboutUs: "",
};

export default function useCustomerForm() {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.streetAddress.trim()) newErrors.streetAddress = "Street address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!formData.zip.trim()) newErrors.zip = "ZIP code is required";
    if (!formData.propertyType) newErrors.propertyType = "Property type is required";
    if (!formData.homeSize.trim()) newErrors.homeSize = "Home size is required";
    if (!formData.housekeepingSituation.trim()) newErrors.housekeepingSituation = "Current housekeeping situation is required";
    if (!formData.serviceFrequency) newErrors.serviceFrequency = "Service frequency is required";
    if (!formData.specialRequests.trim()) newErrors.specialRequests = "Please describe any special requirements";
    if (!formData.heardAboutUs) newErrors.heardAboutUs = "Please tell us how you heard about us";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const setFormField = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      toast.error("Please correct the errors and try again.");
      return;
    }

    setIsLoading(true);
    try {
      await createCustomerInquiry(formData);
      toast.success("Thanks! We received your details.");
      setFormData(initialState);
      setErrors({});
    } catch (error) {
      console.error("Error saving inquiry:", error);
      toast.error("There was an error submitting the form. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return { formData, errors, isLoading, handleChange, handleSubmit, setFormField };
}
