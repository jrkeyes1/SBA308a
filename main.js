import { fetchDogs, searchBreed, addFavoriteBreed } from './api.js';
import { displayDogs, clearGallery } from './user.js';
import { API_KEY } from './config.js';


console.log('API Key:', API_KEY); // Debugging line to check if API key is correctly imported
let currentPage = 1;
const loadMoreDogs = async () => {
  console.log('Loading more dogs...'); // Debugging line
  const dogs = await fetchDogs(currentPage);
  if (dogs) {
    displayDogs(dogs);
    currentPage++;
  } else {
    console.error('Failed to load more dogs');
  }
};
document.getElementById('load-more').addEventListener('click', loadMoreDogs);
document.getElementById('search-button').addEventListener('click', async () => {
  const breed = document.getElementById('breed-search').value;
  console.log('Searching for breed:', breed); // Debugging line
  const results = await searchBreed(breed);
  if (results) {
    clearGallery();
    displayDogs(results.map(result => ({
      url: `https://cdn2.thedogapi.com/images/${result.reference_image_id}.jpg`,
      breeds: [result]
    })));
  } else {
    console.error('Failed to search for breed');
  }
});
document.getElementById('add-breed-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  const breedName = document.getElementById('new-breed').value;
  console.log('Adding favorite breed:', breedName); // Debugging line
  const newFavorite = await addFavoriteBreed({ title: breedName, body: 'Favorite breed', userId: 1 });
  alert(`Favorite breed added to Go Fetch Gallery!`);
});
// Initial load
loadMoreDogs();