const pages = document.querySelectorAll(".page");

let leftZ = 0;
let rightZ = 5;
function handlePage(event) {
  const thisPage = event.currentTarget;
  if (
    !thisPage.classList.contains("animationOpen") &&
    !thisPage.classList.contains("animationClose")
  ) {
    rightZ += -1;
    leftZ += 1;
    thisPage.classList.add("animationOpen");
    thisPage.style.zIndex = leftZ;
  } else if (thisPage.classList.contains("animationOpen")) {
    thisPage.classList.remove("animationOpen");
    thisPage.classList.add("animationClose");
    leftZ += -1;
    rightZ += +1;
    thisPage.style.zIndex = rightZ;
  } else {
    thisPage.classList.remove("animationClose");
    thisPage.classList.add("animationOpen");
    rightZ += -1;
    leftZ += 1;
    thisPage.classList.add("animationOpen");
    thisPage.style.zIndex = leftZ;
  }
}

for (const page of pages) {
  page.addEventListener("click", handlePage);
}
const cover = document.querySelector(".cover");

const songs = ["./aud/01.mp3", "./aud/02.mp3", "./aud/03.mp3","./aud/04.mp3"];

const songsName = ["Ghost Duet","Melting", "Baby im yours", "Walk with me"];
const poster = ["./img/art_1.jpg", "./img/art_2.jpg", "./img/art_3.jpg","./img/art_4.jpg"];
const lyrics = [
  `👻🖤❤️🤍👻`,
  `You are my church, you are my place of worship
  I heard you're the plug, can I be the circuit?
  When I got court, I hope that you're the verdict
  When you're around, my insides turn inverted
  `,

  `Baby, I'm yours (baby, I'm yours)
  And I'll be yours (yours) until the stars fall from the sky
  Yours (yours) until the rivers all run dry
  In other words, until I die`,

  `Hello dear
  You've been pulling me closer
  Let's write about you and me
  I'll sing to you a lullaby
  Let's make a story of our own`
]
const gift = ['./img/004.gif','./img/001.gif','./img/002.gif','./img/003.gif']
const songTitle = document.getElementById("songTitle");
const lir = document.getElementById("lyrics");
const fillBar = document.getElementById("fill");
const giftEl = document.getElementById("gift");


let song = new Audio();
let currentSong = 0; // it point to the current song

window.onload = playSong(); // it will call the function playSong when window is load

function playSong() {
  song.src = songs[currentSong];
  songTitle.textContent = songsName[currentSong];
  giftEl.src = gift[currentSong]
  lir.textContent = lyrics[currentSong]
  song.play(); // play the song
}

function playOrPauseSong() {
  if (song.paused) {
    song.play();
    document.querySelector("#play img").src = "./icons/Pause.png";
  } else {
    song.pause();
    document.querySelector("#play img").src = "./icons/Play.png";
  }
}

song.addEventListener("timeupdate", function () {
  var position = song.currentTime / song.duration;
  if (song.currentTime === song.duration) {
    next();
  }
  fillBar.style.width = position * 100 + "%";
});

function next() {
  currentSong++;
  if (currentSong > 3) {
    currentSong = 0;
  }
  playSong();
  document.querySelector("#play img").src = "./icons/Pause.png";
  document.querySelector("#image img").src = poster[currentSong];
}

function pre() {
  currentSong--;
  if (currentSong < 0) {
    currentSong = 3;
  }
  playSong();
  document.querySelector("#play img").src = "./icons/Pause.png";
  document.querySelector("#image img").src = poster[currentSong];
}
