import axios from 'axios';

const API_KEY = 'CPPSBFFGu3zGPF4IuiAOdO0FudGQXr5F';
const API_BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

export const fetchArticles = async (query) => {
  try {
    const response = await axios.get(`${API_BASE_URL}?q=${query}&api-key=${API_KEY}`);
    return response.data.response.docs;
  } catch (error) {
    throw error;
  }
};

