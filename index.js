let selectAllButtons = document.querySelectorAll(".drum");

for (i = 0; i < selectAllButtons.length; i++) {
    selectAllButtons[i].addEventListener("click" , function () {
      
    let buttonInnerHtml = this.innerHTML;
    makeSounds(buttonInnerHtml);
})
}


document.addEventListener("keydown", function (e) {

    makeSounds(e.key); 
});




    function makeSounds(key) {

switch (key) {
  case "w":
    let audio1 = new Audio("./sounds/tom-1.mp3");
    audio1.play();
    break;

  case "a":
    let audio2 = new Audio("./sounds/tom-2.mp3");
    audio2.play();
    break;

  case "s":
    let audio3 = new Audio("./sounds/tom-3.mp3");
    audio3.play();
    break;

  case "d":
    let audio4 = new Audio("./sounds/tom-4.mp3");
    audio4.play();
    break;

  case "j":
    let audio5 = new Audio("./sounds/snare.mp3");
    audio5.play();;
    break;

  case "k":
    let audio6 = new Audio("./sounds/crash.mp3");
    audio6.play();
    break;

  case  "l":
    let audio7 = new Audio("./sounds/kick-bass.mp3");
    audio7.play();
    break;

    default:
}}





// function plus(num1, num2) {
//     return num1 + num2;
// }

// function multiplay(num1, num2) {
//     return num1 * num2;
// }

// function divide(num1, num2) {
//     return num1 / num2;
// }

// function Subtract(num1, num2) {
//     return num1 - num2;
// }

// function culectur(num1,num2,opject) {
//     return opject(num1, num2);
// }

// console.log(culectur(10,2,divide));








// function HouseKepper(name, age, yearsOfExperian, language) {
//     this.name = name;
//     this.age = age;
//     this.yearsOfExperian = yearsOfExperian;
//     this.language = language;
//     this.cleanHouse = function () {
//         alert("on my way")
//     }
// }

// HouseKepper1 = new HouseKepper("lara", "25", "6 years", ["arabic, English"]);
// HouseKepper2 = new HouseKepper("nour", "19", "2 years", "arabic");

// console.log(HouseKepper1);
// console.log(HouseKepper2);

// HouseKepper1.cleanHouse();