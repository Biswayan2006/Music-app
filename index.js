const image=document.getElementById('cover'),
title = document.getElementById('music-title'),
artist = document.getElementById('music-artist'),
currentTimeEl = document.getElementById('current-time'),
durationEl = document.getElementById('duration'),
progress = document.getElementById('progress'),
playerProgress = document.getElementById('player-progress'),
prevBtn = document.getElementById('prev'),
nextBtn = document.getElementById('next'),
playBtn = document.getElementById('play'),
background = document.getElementById('bg-img'),

const music = new Audio();

const songs = [
    {
        path: 'Closer The Chainsmokers.mp3',
        displayName: 'Closer The Chainsmokers',
        cover : 'Closer.jpg',
        artist; 'The Chainsmokers',
    },
    {
        path: 'shape of you.mps',
        displayName: 'Shape Of You',
        cover : 'shape of you.jpg',
        artist; 'ED Sheeran',
    },
    {
        path: 'Despacito.mp3',
        displayName: 'Despacito',
        cover : 'despacito.jpg',
        artist; 'Luis Fonsi..Daddy Yankee  ',
    },
];
 let musicIndex = 0;
 let isPlaying = false;
 function togglePlay(){
    if(isPlaying){
        pauseMusic();
    }else{
        playMusic();
    }
 }

 function playMusic(){
    isPlaying=true;
// change play button icon
    playBtn.classList.replace('fa-play','fa-pause'); 
    // set button hower title
    playBtn.setAttribute('title','Pause');
    music.play();

 }

 function pauseMusic(){
    isPlaying=false;
// change pause button icon
    playBtn.classList.replace('fa-pause','fa-play'); 
    // set button hower title
    playBtn.setAttribute('title','Play');
    music.pause();

 }

 function loadMusic(songs){
    music.src = songs.path;
    title.textContent = songs.displayName;
    artist.textContent = songs.artist;
    image.src = songs.cover;
    background.src = songs.cover;
 }
 function changeMusic(direction){
    musicIndex = (musicIndex + direction + songs.length) % songs.length;
    loadMusic(songs[musicIndex].artist);
    playMusic();
 }

 function updateProgressBar(){
    const{duration , currentTime} = music;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = '${progressPercent}%';

    const formatTime = (time) => String(Math.floor(time)).padStart(2,'0');
    durationEl.textContent = '${formatTime(duration/60)}:${formatTime (duration % 60)}';
    currentTimeEl.textContent = '${formatTime(currentTime / 60)}:${formatTime( currentTime % 60)}';
 }

  function setProgressBar (e) {
    const width = playerProgress.clientWidth;
    const clickX = e.offsetX;
    music.currentTime = (clickX / width) * music.duration;
  }
  playBtn.addEventListener('click',togglePlay);
  prevBtn.addEventListener('click', ()=> changeMusic(-1));
  nextBtn.addEventListener('click', ()=> changeMusic(1));
  music.addEventListener('ended', () => changeMusic(1));
  music.addEventListener('timeupdate',updateProgressBar);
  playerProgress.addEventListener('click',setProgressbar);

  loadMusic(songs[musicIndex];)