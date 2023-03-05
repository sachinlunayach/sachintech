console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "52 Gaj ka daman [New Hr Release]", filePath: "songs/1.mp3", coverPath: "1.jpg"},
    {songName: "4G ka Jmana[New Hr Release]", filePath: "songs/2.mp3", coverPath: "2.jpg"},
    {songName: "2 Numbari [New Hr Release]-320k", filePath: "songs/3.mp3", coverPath: "3.jpg"},
    {songName: "Bawli Tred [New Hr Release]", filePath: "songs/4.mp3", coverPath: "4.jpg"},
    {songName: "Bag mein bole Goyal[New Hr Release]", filePath: "songs/5.mp3", coverPath: "5.jpg"},
    {songName: "Badlungi Bhartar[New Hr Release]", filePath: "songs/6.mp3", coverPath: "6.jpg"},
    {songName: "Badli Badli lage[New Hr Release]", filePath: "songs/7.mp3", coverPath: "7.jpg"},
    {songName: "Angoor[New Hr Release]", filePath: "songs/8.mp3", coverPath: "8.jpg"},
    {songName: "2 Gaj ka ghunghat[New Hr Release]", filePath: "songs/9.mp3", coverPath: "9.jpg"},
    {songName: "Aajkal k buahe mein[New Hr Release]", filePath: "songs/10.mp3", coverPath: "10.jpg"},
    {songName: "Beautiful Face[New Hr Release]", filePath: "songs/11.mp3", coverPath: "10.jpg"},
    {songName: "Anuradha Paudwal & Gulshan Kumar [New Bhajan Release]", filePath: "songs/12.mp3", coverPath: "10.jpg"},
    {songName: "Hara hu Baba par tujhpe bharosa ha[New Bhajan Release]", filePath: "songs/13.mp3", coverPath: "10.jpg"},
    {songName: "Ram Siya Ram _ Mangal Bhavan[New Bhajan Release]", filePath: "songs/14.mp3", coverPath: "10.jpg"},
    {songName: "Kabhi Pyase ko Pani Pilaya Nahi[New Bhajan Release]", filePath: "songs/15.mp3", coverPath: "10.jpg"},
    {songName: "kanhiya mittal non stop bhajan[New Bhajan Release]", filePath: "songs/16.mp3", coverPath: "10.jpg"},
    {songName: "Kanhiya Mittal Ji khatu[New Bhajan Release]", filePath: "songs/17.mp3", coverPath: "10.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})