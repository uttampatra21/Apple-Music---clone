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
