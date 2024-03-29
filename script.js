<script>
  setInterval(()=>{
        const time = document.querySelector(".display #time");
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let day_night = "AM";
        if(hours > 12){
          day_night = "PM";
          hours = hours - 12;
        }
        if(seconds < 10){
          seconds = "0" + seconds;
        }
        if(minutes < 10){
          minutes = "0" + minutes;
        }
        if(hours < 10){
          hours = "0" + hours;
        }
        time.textContent = hours + ":" + minutes + ":" + seconds + " "+ day_night;
      });

 var slideIndex = 0;
        showSlides();

        function showSlides() {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dot");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }
            slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1}    
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex-1].style.display = "block";  
            dots[slideIndex-1].className += " active";
            setTimeout(showSlides, 2000); // Change image every 2 seconds
        }
 </script>
 <script>
let captchaText = document.querySelector('#captcha');
var ctx = captchaText.getContext("2d");
ctx.font = "30px Roboto";
ctx.fillStyle = "#08e5ff";

let userText = document.querySelector('#textBox');
let submitButton = document.querySelector('#submitButton');
let output = document.querySelector('#output');
let refreshButton = document.querySelector('#refreshButton');

// alphaNums contains the characters with which you want to create the CAPTCHA
let alphaNums = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let emptyArr = [];
// This loop generates a random string of 7 characters using alphaNums
// Further this string is displayed as a CAPTCHA
for (let i = 1; i <= 4; i++) {
 emptyArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
}
var c = emptyArr.join('');
ctx.fillText(emptyArr.join(''),captchaText.width/4, captchaText.height/2);
userText.addEventListener('keyup', function(e) {
 // Key Code Value of "Enter" Button is 13
 if (e.keyCode === 13) {
 if (userText.value === c) {
 output.classList.add("correctCaptcha");
 output.innerHTML = "Correct!";
 } else {
 output.classList.add("incorrectCaptcha");
 output.innerHTML = "Incorrect, please try again";
 }
 }
});
submitButton.addEventListener('click', function() {
 if (userText.value === c) {
 output.classList.add("correctCaptcha");
 output.innerHTML = "Correct!";
  button.onclick(showMusicList());
 } else {
 output.classList.add("incorrectCaptcha");
 output.innerHTML = "Incorrect, please try again";
 }
});
refreshButton.addEventListener('click', function() {
 userText.value = "";
 let refreshArr = [];
 for (let j = 1; j <= 4; j++) {
 refreshArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
 }
 ctx.clearRect(0, 0, captchaText.width, captchaText.height);
 c = refreshArr.join('');
 ctx.fillText(refreshArr.join(''),captchaText.width/4, captchaText.height/2);
 output.innerHTML = "";
});
 
function search_musicData() { 
    let input = document.getElementById('searchbar').value 
    input=input.toLowerCase(); 
    let x = document.getElementsByClassName('showMusicList()'); 
      
    for (i = 0; i < x.length; i++) {  
        if (!x[i].innerHTML.toLowerCase().includes(input)) { 
            x[i].style.display="none"; 
        } 
        else { 
            x[i].style.display="list-item";                  
        } 
    } 
} 
  // Disabled Right Click Section
   window.oncontextmenu = function () {
            console.log("Right Click Disabled");
            alert("Warning!😒 Right Click Disabled");
            return false;
        }
  // Disabled Right Click 
 
 const playerWindow = document.getElementById("players");
 const audio = document.getElementById("audio");
 const name = document.getElementById("name");
 const category = document.getElementById("category");
 const thumbnail = document.getElementById("thumbnail");
 const playBtn = document.getElementById("playBtn");
 const progress = document.getElementById("progress");
 const ttview = document.getElementById("ttview");
 const tcview = document.getElementById("tcview");
 const volumeBar = document.getElementById("volumeBar");
 
 const musicList = document.getElementById("music-list");
 const body = document.querySelector("body");
 // variable 
 let musicData = [
 {
 id:1,
 category:"Love",
 name:"Kaash Tu Mila Hota",
 src:"audio/kaash.mp3",
 image:"audio/kaash.jpg",
 },
 {
 id:2,
 category:"Punjabi",
 name:"Lehanga",
 src:"media/Lehanga.mp3",
 image:"media/Lehanga.jpeg",
 },
 {
 id:3,
 category:"Sad",
 name:"Thodi Jagah",
 src:"media/Thodi jagah.mp3",
 image:"media/Thodi.jpeg",
 },
 {
 id:4,
 category:"Sad",
 name:"Main Woh Chaand",
 src:"pins/mai.mp3",
 image:"pins/mai.jpg",
 },
 {
 id:5,
 category:"Punjabi",
 name:"Nira Ishq",
 src:"pins/nira.mp3",
 image:"media/Nira.jpeg",
 },
 {
 id:6,
 category:"Sad Song",
 name:"Uska Hi Bana",
 src:"audio/uska.mp3",
 image:"audio/bana.jfif",
 },
 {
 id:7,
 category:"Sad",
 name:"Ya ali",
 src:"audio/yaali.mp3",
 image:"audio/34.jfif",
 },
 {
 id:8,
 category:"Romantic Sad Song",
 name:"Rab Bhi Khel hai Khele",
 src:"audio/Rab.mp3",
 image:"audio/23.jpg",
 },
 {
 id:9,
 category:"Punjabi",
 name:"8 Parche",
 src:"media/8 parche.mp3",
 image:"media/Parche.jpeg",
 },
 {
 id:10,
 category:"Sad",
 name:"Hai Dil Yeh Mera",
 src:"media/Hai dil yeh mera.mp3",
 image:"media/Hai dil.jpeg",
 },
 {
 id:11,
 category:"Punjabi",
 name:"Billion Billion",
 src:"media/Billion Billion.mp3",
 image:"media/Billion.jpg",
 },
 {
 id:12,
 category:"Punjabi",
 name:"Suit Punjabi",
 src:"media/Suit punjabi.mp3",
 image:"media/Suit.jpeg",
 papular:15,
 },
 {
 id:13,
 category:"Punjabi",
 name:"Prada",
 src:"media/Prada.mp3",
 image:"media/Prada.jpeg",
 },
 {
 id:14,
 category:"Sad Song",
 name:"Main Jis Din Bhula Du",
 src:"audio/main.mp3",
 image:"audio/din.jfif",
 },
 {
 id:15,
 category:"Dance",
 name:"Feelings",
 src:"pins/feeling.mp3",
 image:"pins/feel.jpg",
 },
 {
 id:16,
 category:"Sad",
 name:"Zaroorat",
 src:"song/zaroorat.mp3",
 image:"song/zaroorat.jpeg",
 },
 {
 id:17,
 category:"Masti",
 name:"Tum Hi Ho Bandhu",
 src:"song/tumhi.mp3",
 image:"song/cocktail.jpeg",
 },
 {
 id:18,
 category:"Love",
 name:"Dekhte Dekhte",
 src:"song/dekhte.mp3",
 image:"song/dekhte.jpeg",
 },
 {
 id:19,
 category:"Dance",
 name:"Coca Cola Tu",
 src:"song/coca.mp3",
 image:"song/coca.jpeg",
 },
 {
 id:20,
 category:"Love",
 name:"Duniyaa",
 src:"song/duniya.mp3",
 image:"song/duniya.jpeg",
 },
 {
 id:21,
 category:"Sad",
 name:"Ek Mulaqat",
 src:"song/ek.mp3",
 image:"song/ek.jpeg",
 },
 {
 id:22,
 category:"Love Flute",
 name:"Krishna Love Flute",
 src:"song/krishna.mp3",
 image:"song/krishna.jpeg",
 },
 {
 id:23,
 category:"Sad",
 name:"Lambiyan Si Judaiyan",
 src:"song/lambi.mp3",
 image:"song/lambi.jpeg",
 },
 {
 id:24,
 category:"Love",
 name:"Khaab Akhil",
 src:"song/khaab.mp3",
 image:"song/khaab.jpeg",
 },
 {
 id:25,
 category:"Sad",
 name:"Mitti Di Khushboo",
 src:"audio/mitti.mp3",
 image:"audio/mitti.jpeg",
 },
 {
 id:26,
 category:"Love",
 name:"Mubarak Ho Tumko",
 src:"audio/mubarak.mp3",
 image:"audio/mubarak.jpeg",
 },
 {
 id:27,
 category:"Love",
 name:"Jo Bhi Kasmein",
 src:"media/Jo bhi kasmein.mp3",
 image:"media/Jo bhi.jpeg",
 },
 {
 id:28,
 category:"Love",
 name:"Sanam Re",
 src:"audio/sanam.mp3",
 image:"audio/sanam.jpeg",
 },
 {
 id:29,
 category:"Sad",
 name:"Soniye Hiriye",
 src:"audio/soniye.mp3",
 image:"audio/soniye.jpeg",
 },
 {
 id:30,
 category:"Sad",
 name:"Teri Yaadein",
 src:"audio/teri.mp3",
 image:"audio/teri.jpeg",
 },
 {
 id:31,
 category:"Love",
 name:"Tum Hi Aana",
 src:"audio/tum.mp3",
 image:"audio/tum.jpeg",
 },
{
 id:32,
 category:"Love",
 name:"Khamoshiyan",
 src:"media/Khamoshiyan.mp3",
 image:"media/Khamosiyan.jpeg",
 },
 {
 id:33,
 category:"Sad",
 name:"Hamari Adhuri Kahani",
 src:"songg/hamari.mp3",
 image:"songg/hamari.jpeg",
 },
 {
 id:34,
 category:"Dance",
 name:"Hauli Hauli",
 src:"songg/hauli.mp3",
 image:"songg/hauli.jpeg",
 },
 {
 id:35,
 category:"Romance/Sad",
 name:"Pachtaoge",
 src:"songg/pach.mp3",
 image:"songg/pach.jpeg",
 },
 {
 id:36,
 category:"Dance",
 name:"Paisa Paisa",
 src:"songg/paisa.mp3",
 image:"songg/paisa.jpeg",
 },
 {
 id:37,
 category:"Sad",
 name:"Humnava",
 src:"songg/hum.mp3",
 image:"songg/hum.jpeg",
 },
 {
 id:38,
 category:"Romance",
 name:"Sanam Teri Kasam",
 src:"songg/sanam.mp3",
 image:"songg/sanam.jpeg",
 },
 {
 id:39,
 category:"Romance/Sad",
 name:"Tere Liye",
 src:"songg/tere.mp3",
 image:"songg/tere.jpeg",
 },
 {
 id:40,
 category:"Dance",
 name:"Desi Girl",
 src:"audioo/desi.mp3",
 image:"audioo/desi.jpeg",
 },
 {
 id:41,
 category:"Sad",
 name:"Kabhi Khushi Kabhi Gham",
 src:"audioo/kabhi.mp3",
 image:"audioo/kabhi.jpeg",
 },
 {
 id:42,
 category:"Dance",
 name:"Kajra Re",
 src:"audioo/kajra.mp3",
 image:"audioo/kajra.jpeg",
 },
 {
 id:43,
 category:"Dance",
 name:"Mere Yaar Ki Shaadi",
 src:"audioo/mere.mp3",
 image:"audioo/mere.jpeg",
 },
 {
 id:44,
 category:"Romance",
 name:"Paniyon Sa",
 src:"audioo/pani.mp3",
 image:"audioo/pani.jpeg",
 },
 {
 id:45,
 category:"Sad",
 name:"Tera Jaisa Yaar",
 src:"audioo/tera.mp3",
 image:"audioo/tera.jpeg",
 },
 {
 id:46,
 category:"Love",
 name:"Baatein Yeh Kabhi Na",
 src:"media/Baatein.mp3",
 image:"media/Baatein.jpeg",
 },
 {
 id:47,
 category:"Sad",
 name:"Chodh Diya Woh Raasta",
 src:"media/Choddiya.mp3",
 image:"media/Chod.jpeg",
 },
 {
 id:48,
 category:"Love",
 name:"Aaj Din Chadeya",
 src:"media/Aaj.mp3",
 image:"media/Aaj.jpeg",
 },  
 {
 id:49,
 category:"Dance",
 name:"Mummy Nu Pasand",
 src:"media/Mummy nu.mp3",
 image:"media/Mummy.jpeg",
 },
 {
 id:50,
 category:"sad",
 name:"Tere Naal",
 src:"pins/tere naal.mp3",
 image:"pins/tere.jpg",
 },
 {
 id:51,
 category:"Punjabi",
 name:"Bapu Zimidar",
 src:"song/bapu.mp3",
 image:"song/bapu.jpeg",
 },
 {
 id:52,
 category:"Punjabi",
 name:"Garmi",
 src:"pins/garmi.mp3",
 image:"pins/garmi.jpg",
 },
  {
 id:53,
 category:"Dance",
 name:"Prem Ratan Dhan Payo",
 src:"audio/prem.mp3",
 image:"audio/prem.jpeg",
 },
   
]
let repeatMusic = false;
let index = 1;
let songs = musicData;

const elc = musicList.getElementsByClassName("equalize")[index-1];

const showMusicList = () => {
 document.querySelector(".sec-1").classList.add("hide");
 document.querySelector(".sec-2").classList.remove("hide");
}
const darkMood = () => {
 body.classList.toggle("dark");
}

const setActive = (i) => {
  setEqualizer()
  let a =  musicList.querySelector(".active");
  if(a !== null) {
   a.classList.remove("active");
  }
  const ele = document.getElementsByClassName("music")[i-1];
  ele.classList.add("active");
}

const setData = data => {
 name.textContent = data.name;
 category.textContent = data.category;
 thumbnail.src = data.image;
} 

const playMusic = async (i) => {
  if(i == 18 || i == 10 ) {
   body.classList.toggle("dark");
   setTimeout(() => body.classList.toggle("dark"),7000);
  }
  let data = musicData.find(m => m.id === i) || musicData[1];
  setActive(i)
  setData(data);
  playBtn.textContent = "pause";
  audio.src = data.src;
  await audio.load();
  audio.play();
}
 
 const playPause = e => {
    if(audio.paused) {
    playBtn.textContent = "pause";
    audio.play();
    setEqualizer()
   } else{
   playBtn.textContent = "play_arrow";
    audio.pause();
    setEqualizer(true)
   }
 }
 
 const showplayer = () => {
   playerWindow.classList.toggle("active");
 }
 const equalizerBtn = e => {
  e.target.classList.toggle("active");
  document.querySelector(".thumbnail").classList.toggle("spin");
 }
 const addFvt = e => {
  e.target.classList.toggle("active")
 }
 const repeat = e => {
  e.target.classList.toggle("active")
  repeatMusic = !repeatMusic;
  audio.loop = repeatMusic;
 }
 const volumeBox = e => {
  e.target.classList.toggle("active");
  document.querySelector(".volume-box").classList.toggle("show");
 }
 const nextPlay = () => {
  index++;
  if (index > musicData.length) {
   index = 1;
  }
  playMusic(index);
 }
 const prevPlay = () => {
  index--;
  if (index <= 0) {
  index = musicData.length;
  }
  playMusic(index);
 }
 // eventListners 
 audio.addEventListener("ended", () => {
  nextPlay();
 })
 audio.onloadeddata = () =>  {
 progress.max = audio.duration
 const ds = parseInt(audio.duration % 60)
 const dm = parseInt((audio.duration / 60) % 60)
 ttview.textContent = dm + ':' + ds;
 }
 audio.ontimeupdate =  () =>  { 
   progress.value = audio.currentTime 
 }
 audio.addEventListener('timeupdate', () => {
 //progress.value = audio.currentTime;
 var cs = parseInt(audio.currentTime % 60)
 var cm = parseInt((audio.currentTime / 60) % 60)
  ctview.textContent = cm + ':' + cs;
 }, false);
 
 const changeProgressBar = () => { 
   audio.currentTime = progress.value;
 }
 
/* volume control */
 const volumeDown = () => {
  volumeBar.value = Number(volumeBar.value) - 20
  audio.volume = volumeBar.value / 100
 }
 const volumeUp = () => {
  volumeBar.value = Number(volumeBar.value) + 20
  audio.volume = volumeBar.value / 100
 }
 

 const addList = (data) => {
  let div = document.createElement("div");
  div.classList.add('music');
  div.setAttribute("data-id", data.id);
  let html = `
   <div class="list-thumbnail" >
    <img src="${data.image}" alt="" >
   </div>
   <div class="list-content" >
   <h3>${data.name}</h3>
   <small>${data.category}</small>
   </div>
   <button class="list-btn" >
   <i class="material-icons">play_arrow</i>
    <div class="equalize">
    <span></span>
    <span></span>
    <span></span>
   </div>
   </button>`;
   div.innerHTML = html;
   musicList.append(div);
   div.addEventListener('click', () => {
    playMusic(data.id);
    playerWindow.classList.add("active");
    index = data.id;
   });
 }
 
 const setMusicList =  () => {
  songs.forEach(song => addList(song));
 }
 
 const FirstSetUp = () => {
  audio.src = musicData[index -1].src;
  setData(musicData[index -1]);
  setMusicList();
 }
 FirstSetUp()
 
 const filterCat = (cat) => {
  songs = musicData.filter(song => song.category == cat);
  while(musicList.hasChildNodes()){
    musicList.removeChild(musicList.firstChild);
  }
  setMusicList()
 }
 const filterAll = () => {
  songs = musicData;
  while(musicList.hasChildNodes()){
    musicList.removeChild(musicList.firstChild);
  }
  setMusicList()
 }
function setEqualizer(action = false){
 const elc = musicList.getElementsByClassName("equalize")[index-1];
 const thumb =  document.querySelector(".thumbnail");
 if(elc.classList.contains("pause")) {
   elc.classList.remove("pause")
 } else {
  if(action) {
   elc.classList.add("pause")
  }
 }
 if(thumb.classList.contains("spin") && audio.paused && action){
  thumb.classList.add("pause");
 } else if(thumb.classList.contains("spin") &&!audio.paused){
  thumb.classList.remove("pause");
 }
}
  </script>

