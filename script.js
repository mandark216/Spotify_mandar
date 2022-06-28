console.log("Welcome to Spotify")


// Initialise the varibles
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3')
let masterplay = document.getElementById("masterplay")
let myProgessor = document.getElementById("myProgessor")
let gif = document.getElementById("gif")
let masterSongName = document.getElementById("masterPlaySong");

let songItem = Array.from(document.getElementsByClassName("songItem"))



let songs = [
    { songName: "Ritviz-Jeet",          filepath: "songs/1.mp3", },
    { songName: "Pehla Pehla Pyar - Vishal Mishra",     filepath: "songs/2.mp3" },
    { songName: "Tum Tak Tum Tak",      filepath: "songs/3.mp3" },
    { songName: "Sprit Vs kabira",      filepath: "songs/4.mp3" },
    { songName: "Maiyya Mainu",         filepath: "songs/5.mp3" },
    { songName: "Kaise Hua-Kabir Singh", filepath: "songs/6.mp3" },
    { songName: "Give me SomeShine",      filepath: "songs/7.mp3" },

    { songName: "Memories",             filepath: "songs/8.mp3" },
    { songName: "Maan Mera vs Shape lofi ",   filepath: "songs/9.mp3" },
    { songName: "Ranza ",                filepath: "songs/10.mp3" }


]

songItem.forEach((element, i) => {
    console.log(element, i)
    element.getElementsByTagName("span")[0].innerText = songs[i].songName;
});


// handle play pause button

masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play()
        masterplay.classList.remove('fa-play')
        masterplay.classList.add('fa-pause')
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play')
        gif.style.opacity = 0;

    }
})

// listen events 

audioElement.addEventListener("timeupdate", () => {
    // console.log('timeupdate')

    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    // console.log(progress)
    myProgessor.value = progress;
})

myProgessor.addEventListener('change', () => {
    audioElement.currentTime = myProgessor.value * audioElement.duration / 100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
        element.classList.add('fa-circle-play')

})
}

Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.addEventListener('click',(w)=>{
            makeAllPlays();
        songIndex=parseInt(w.target.id);
        w.target.classList.remove('fa-circle-play');
        w.target.classList.add('fa-circle-pause');
        audioElement.src='songs/'+(songIndex+1)+'.mp3';
        audioElement.currentTime=0;
        audioElement.play();
        masterSongName.innerText=songs[songIndex].songName;

        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        gif.style.opacity=1;
    })

})



document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>9){
        songIndex=0;
    }

    else{
        songIndex+=1;
    }
    audioElement.src='songs/'+(songIndex+1)+'.mp3';
    audioElement.currentTime=0;
    audioElement.play();
    masterSongName.innerText=songs[songIndex].songName;
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
})


document.getElementById('back').addEventListener('click',()=>{
    if(songIndex<0){
        songIndex=0;
    }

    else{
        songIndex-=1;
    }
    audioElement.src='songs/'+(songIndex+1)+'.mp3';
    audioElement.currentTime=0;
    audioElement.play();
    masterSongName.innerText=songs[songIndex].songName;

    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
})