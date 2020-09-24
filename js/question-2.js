//Question 2

//API url
const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const gamesContainer = document.querySelector(".games-container");

//Function to get data from API
const getData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;

    gamesContainer.innerHTML = "";

    for (let i = 0; i < 8; i++) {
      gamesContainer.innerHTML += createItem(results[i]);
    }
  } catch (error) {
    gamesContainer.innerHTML = createError(error);
  }
};

//Call function to get data from API
getData();

//Reusable function to create Game Item (This reusable function could be separated into its own file)
const createItem = (gameInfo) => {
  return `<div class="game-item"><h3>${gameInfo.name}</h3><p>Rating: ${gameInfo.rating}</p><p>Tags: ${gameInfo.tags.length}</p></div>`;
};

//Reusable function to create error message (This reusable function could be separated into its own file)

const createError = (err) => {
  return `<div class="danger">An error occured when calling the API. Error: ${err}</div>`;
};
