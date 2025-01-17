// Use Node-style imports for dependencies.
const axios = require('axios');
const result = require('./result.js');

const setResult = result.setResult;
const setError = result.setError;

const BASE_URL = "https://petdibs.herokuapp.com/pets/";

// Option functions.
const listPets = () => {
  // Fill out as part of Wave 1.
  axios.get(BASE_URL)
  .then((response) => {
    setResult(response.data);
    })    
  .catch(() => {
    setError("There was an error.");
  });
}

const showDetails = (selectedPet) => {
  if (!selectedPet) {
    setError("You tried to show details for a pet without selecting it!");
    return;
  }
  axios.get(BASE_URL+selectedPet)
  .then((response) => {
    setResult(response.data);
    })
  .catch((error) => {
    setError('failed to get details');
  });
}

const removePet = (selectedPet) => {
  if (!selectedPet) {
    setError("You tried to remove a pet without selecting it!");
    return;
  }
  axios.delete(BASE_URL+selectedPet)
  .then((response) => {
    setResult(response.data);
    })
  .catch((error) => {
    setError('failed to remove');
  });
}

const addPet = (petInfo) => {
  axios.post(BASE_URL, petInfo)
  .then(() => {
    setResult(petInfo);
    })
  .catch(() => {
    setError("failed to add");
  });
}

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets: listPets,
  showDetails: showDetails,
  removePet: removePet,
  addPet: addPet
}
