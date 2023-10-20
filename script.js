window.addEventListener("load", () => {
  callapi();
});

//* ---------------------------- API
const api = "/assets/api/songs.json";

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

//* ----------------------------- SLIDER

//* --------------------------- SECTION
const renderSection = (title, songlist) => {
  renderData(title, songlist);
};

const renderData = (title, songlist) => {
  const data = document.createElement("div");
  data.classList.add("pt-5");

  data.innerHTML = `
                <div class="songs-boxes flex flex-col gap-6">
                  <h1 class="text-xl font-semibold flex items-center px-4">${title} <i class="bx bx-chevron-right"></i></h1>
                  <div id="container" class="flex gap-5 px-4">
                        ${songlist
                          .map((x) => {
                            return `
                    <div class="items" >
                          <div class="song-image relative w-44">
                            <img
                              class="rounded-md"
                              id="image"
                              width="100%"
                              src=${x.image_source}
                            />
                            <div
                              class="image-feature absolute bottom-0  flex justify-between w-full px-2.5"
                            >
                              <div class="play rounded-full backdrop-blur">
                                <i class="bx bxs-right-arrow" id="masterPlay"></i>
                              </div>
                              <div class="info rounded-full backdrop-blur">
                                <idiv class="bx bx-dots-horizontal-rounded"></idiv>
                              </div>
                            </div>
                          </div>
                          <p class="text-xs leading-3 pt-3">${x.song_name}</p>
                          <smal class="text-xs leading-3 opacity-60"
                            >${x.album_name}</smal
                          >
                        </div>
                            `;
                          })
                          .join(" ")}
                  </div>
                </div>
  `;
  document.getElementById("songs-cetagories").appendChild(data);
};

const music = new Audio("/assets/songs/Kalaastar.mp3");

const masterPlay = document.querySelector(".play");

masterPlay.addEventListener("click", () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
  } else {
    music.pause();
  }
});
