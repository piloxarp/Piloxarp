let sentences = [
  "WhiteBoi",
  "Sissy",
  "#PussyFree",
  "♠️ B N W O ♠️",
  "BBC IS SUPERIOR",
  "🦐 White clitty 🦐"
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




// Changer Webiste Theme with css var
if (localStorage.getItem("PW_theme") == null) {
  localStorage.setItem("PW_theme", "DEFAULT");
  document.querySelector("body").setAttribute("id", `theme_${localStorage.getItem("PW_theme")}`);
} else {
  document.querySelector("body").setAttribute("id", `theme_${localStorage.getItem("PW_theme")}`);
}


const myArray = ["BNWO","GREEN","BLUE","RED","DESERT","DEFAULT"]; // Массив с элементами
let currentIndex = 0; // Индекс текущего элемента

document.getElementById('ThemeBTN').addEventListener('click', function() {
    console.log(myArray[currentIndex]); // Выводим текущий элемент
    localStorage.setItem("PW_theme", myArray[currentIndex]);
    document.querySelector("body").setAttribute("id", `theme_${localStorage.getItem("PW_theme")}`);
    currentIndex++; // Переходим к следующему элементу
    
    // Если индекс выходит за пределы массива, сбрасываем его на 0
    if (currentIndex >= myArray.length) {
        currentIndex = 0; 
    }
});

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