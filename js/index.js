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