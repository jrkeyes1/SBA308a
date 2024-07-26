import { API_KEY } from './config.js';

export const fetchDogs = async (page = 1) => {
  try {
    const response = await fetch(`https://api.thedogapi.com/v1/images/search?limit=10&page=${page}`, {
      headers: {
        'x-api-key': API_KEY
      }
    });
    const data = await response.json();
    console.log('Fetched dogs:', data); 
    return data;
  } catch (error) {
    console.error('Error fetching dogs:', error);
  }
};

export const searchBreed = async (breed) => {
  try {
    const response = await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${breed}`, {
      headers: {
        'x-api-key': API_KEY
      }
    });
    const data = await response.json();
    console.log('Search breed results:', data); 
    return data;
  } catch (error) {
    console.error('Error searching breed:', error);
  }
};

export const addFavoriteBreed = async (breed) => {
  // Mocking the POST request to a placeholder API
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(breed),
  });
  const data = await response.json();
  return data;
};
