import axios from "axios";

const API_URL = "http://localhost:5000/events";
const API_URL_VENDOR = "http://localhost:5000/vendors";

export const createEvent = async (eventData) => {
  try {
    const response = await axios.post(API_URL, eventData);
    return response.data;
  } catch (error) {
    console.error("Error creating event:", error);
    throw error;
  }
};

export const createVendor = async (vendorData) => {
  try {
    const response = await axios.post(API_URL_VENDOR, vendorData);
    return response.data;
  } catch (error) {
    console.error("Error creating vendor:", error);
    throw error;
  }
};
