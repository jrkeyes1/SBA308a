export const displayDogs = (dogs) => {
    const gallery = document.getElementById('dog-gallery');
    dogs.forEach(dog => {
      const dogItem = document.createElement('div');
      dogItem.className = 'dog-item';
      dogItem.innerHTML = `<img src="${dog.url}" alt="Dog Image" width="100%">
        <p>Breed: ${dog.breeds[0].name || 'Unknown'} </p>`;
      gallery.appendChild(dogItem);
    });
  };
  
  export const clearGallery = () => {
    document.getElementById('dog-gallery').innerHTML = '';
  };
  