import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://fakestoreapi.com', // Change this if you're using a different API
});

export const fetchSalesData = async () => {
  try {
    // Fetch the products from fakestoreapi
    const response = await apiClient.get('/products');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch sales data');
  }
};

export default apiClient;