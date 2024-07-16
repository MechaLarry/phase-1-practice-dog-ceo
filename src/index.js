document.addEventListener('DOMContentLoaded', () => {
    // Log a message when the page loads
    console.log('%c HI', 'color: firebrick');
  
    // Challenge 1: Fetch and Display Random Dog Images
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        const imageContainer = document.getElementById('dog-image-container');
        data.message.forEach(imageUrl => {
          const img = document.createElement('img');
          img.src = imageUrl;
          imageContainer.appendChild(img);
        });
      });
  
    // Challenge 2: Fetch and Display Dog Breeds
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    let breeds = [];
  
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        breeds = Object.keys(data.message);
        renderBreeds(breeds);
      });
  
    // Function to render breeds
    function renderBreeds(breeds) {
      const breedList = document.getElementById('dog-breeds');
      breedList.innerHTML = ''; // Clear existing list
      breeds.forEach(breed => {
        const li = document.createElement('li');
        li.textContent = breed;
        breedList.appendChild(li);
      });
    }
  
    // Challenge 3: Change Font Color on Click
    const breedList = document.getElementById('dog-breeds');
    
    breedList.addEventListener('click', event => {
      if (event.target.tagName === 'LI') {
        event.target.style.color = 'blue';  // You can change the color to any you like
      }
    });
  
    // Challenge 4: Filter Breeds by First Letter
    const breedDropdown = document.getElementById('breed-dropdown');
  
    // Event listener for the dropdown
    breedDropdown.addEventListener('change', event => {
      const letter = event.target.value;
      const filteredBreeds = breeds.filter(breed => breed.startsWith(letter));
      renderBreeds(filteredBreeds);
    });
  });
  
