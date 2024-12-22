let sentences = [
  "WhiteBoi",
  "Sissy",
  "#PussyFree",
  "♠️ B N W O ♠️",
  "BBC IS SUPERIOR",
  "🦐 White clitty 🦐",
  "Little Cuck",
  "ShrimpDick",
  "white extinction",
  "BBC SexDoll"
]

// random pick sentences
let random = Math.floor(Math.random() * sentences.length);console.log(random);



var i = 0;
var txt = sentences[random]; 
var speed = 40; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.querySelector("#description").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
} typeWriter()



let language = window.navigator.language;
let languageFistTwo = language.substr(0,2); // To only keep the first 2 characters.

function LangTransform(lang) {
  console.log(document.querySelectorAll(".head_case"));
  console.log(document.querySelectorAll(".projects > a > p"))
  console.log(document.querySelectorAll(".fg_btn"))
  if(lang == 'ru'){
  document.querySelectorAll(".head_case > h2")[0].innerHTML = "Ссылки:";
  document.querySelectorAll(".head_case > h2")[1].innerHTML = "Проекты:";
  document.querySelectorAll(".projects > a > p")[0].innerHTML = "Описание";
  document.querySelectorAll(".projects > a > p")[1].innerHTML = "Описание";
  document.querySelectorAll(".projects > a > p")[2].innerHTML = "Описание";
  document.querySelector(".fg_btn").innerHTML = "ЛЮБИМЫЕ ИГРЫ";
  } else {

  }
}


switch (languageFistTwo) { 
  case "en":
   if(languageFistTwo = 'en'){
   }

  default:
     if(languageFistTwo = 'ru'){
      //LangTransform("ru"); // Active RU language
     }
} 