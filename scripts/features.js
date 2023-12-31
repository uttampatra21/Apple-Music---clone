const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
//* -------  CLOSE

document.getElementById("window").addEventListener("click", () => {
  const songsControl = document.getElementById("songs-control");
  if (songsControl.style.display == "flex") {
    songsControl.style.display = "none";
  } else {
    songsControl.style.display = "flex";
  }
});

//* ------------ DARK MODE  LIGHT MODE
const darkLightMode = () => {
  const darkMode = document.getElementById("darkMode");
  const mode = document.querySelector(".mode");

  darkMode.addEventListener("click", () => {
    if (mode.style.visibility == "hidden") {
      mode.style.visibility = "visible";
    } else {
      mode.style.visibility = "hidden";
    }
  });

  const lightMode = document.getElementById("light");
  const dakMode = document.getElementById("dark");
  const home = document.getElementById("home");
  const sidebar = document.getElementById("sidebar");
  const footer = document.querySelector("footer");
  const icon = document.getElementById("main-icon");
  const conteroler = document.getElementById("controler");
  const songControl = document.getElementById("songs-control");
  const lightIconFade = document.querySelector(".light-icon-fade");

  // =================== LIGHT MODE =================//
  lightMode.addEventListener("click", () => {
    //* -------------- BACKGROUND COLOR --------------- //
    home.style.backgroundColor = "White";
    sidebar.style.backgroundColor = "White";
    footer.style.backgroundColor = "White";
    mode.style.backgroundColor = "White";
    songControl.style.backgroundColor = "White";

    //* -------------- COLOR --------------- //
    document.querySelector("body").style.color = "#000";
    //* -------------- BORDER --------------- //
    sidebar.style.border = `1px solid black`;

    //* -------------- ICON --------------- //
    icon.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" class="fill-sky-400/20 stroke-sky-500"></path><path d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836" class="stroke-sky-500"></path></svg>`;
    // lightIconFade.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 mr-2"><path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" class="fill-sky-400/20 stroke-sky-500"></path><path d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836" class="stroke-sky-500"></path></svg>`;
  });

  // =================== DARK MODE =================//

  dakMode.addEventListener("click", () => {
    //* -------------- BACKGROUND COLOR --------------- //
    home.style.backgroundColor = "#0f172a";
    sidebar.style.backgroundColor = "#1e293b";
    footer.style.backgroundColor = "#1e293b";
    mode.style.backgroundColor = "#1e293b";
    conteroler.style.backgroundColor = "#1e293b";
    songControl.style.backgroundColor = "#1e293b";
    document.getElementById("up-next--bar").style.backgroundColor = "#293548";
    document.querySelector(".search").style.backgroundColor = "#293548";
    document.querySelector(".music-player").style.backgroundColor = "#293548";

    //* -------------- COLOR --------------- //
    document.querySelector("body").style.color = "#fff";

    //* -------------- BORDER --------------- //
    sidebar.style.borderRight = `1px solid hsl(0deg 0% 100% / 15%)`;

    //* -------------- ICON --------------- //
    icon.innerHTML = `<svg id="main-icon" viewBox="0 0 24 24" fill="none" class="w-6 h-6">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z" class="fill-sky-400/20"></path>
  <path d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z" class="fill-sky-500"></path>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z" class="fill-sky-500"></path>
</svg>`;
  });

  // =================== DARK MODE =================//
};
darkLightMode();

//* ------------ MenuBar ------------ //

const menubar = () => {
  const hamBar = document.getElementById("hamBar");
  const sidebar = document.getElementById("sidebar");
  hamBar.addEventListener("click", () => {
    if (sidebar.style.top === "-100%") {
      document.getElementById("sidebar").style.top = 0;
      document.getElementById("cross1").style.rotate = `-45deg`;
      document.getElementById("cross1").style.margin = 0;
      document.getElementById("cross2").style.rotate = `45deg`;
    } else {
      document.getElementById("sidebar").style.top = `-100%`;
      document.getElementById("cross1").style.rotate = `0deg`;
      document.getElementById("cross1").style.marginTop = `10px`;
      document.getElementById("cross2").style.rotate = `0deg`;
    }
  });
};

menubar();