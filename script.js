const api = "/assets/api/songs.json";

// Fetch Movie Data
window.addEventListener("load", () => {
  callapi();
});

const callapi = async () => {
  const response = await fetch("/assets/api/gaana.json");
  const data = await response.json();
  const { cardbox } = data;
  if (Array.isArray(cardbox) && cardbox.length) {
    cardbox.forEach((item) => {
      const { songsbox, songscards } = item;
      renderSection(songsbox, songscards);
    });
  }
};

const renderSection = (title, songlist) => {
  renderData(title, songlist);
  console.log(title);
};

const url = "https://accounts.spotify.com/v1/browse/categories";

const apiDat = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
};

apiDat();
