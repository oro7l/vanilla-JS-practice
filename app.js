// ############################### 2.? VARIABLE
const a = 10;
const b = "2";
const myName = "oro";
let c = 6;

console.log("lalalala" + b);
console.log(a + 2 + b / 3);
console.log(5 / 2);
console.log("hello" + myName);
console.log(c);

c = 600;

console.log(c);

const amIFat = true;
const amIFat2 = null; //비어있다.
let something; //undefined, 초기화가 되어있지 않다. 
console.log(amIFat);
console.log(amIFat2);
console.log(something, amIFat2);

// ############################### 2.? ARRAY
const mon = "mon";
const tue = "tue";
const sat = "sat";
const sun = "sun";

//Get Item from Array
const daysOfWeek = [mon, tue, sat, sun, null, undefined];
// Add one mor edya to the array
daysOfWeek.push("wed");
console.log(daysOfWeek);


// ############################### 2.6 OBJECT
const playerName = "oro";
const playerPoints = 121212;
const playerHandsome = false;
const playerFat = "little bit";
const player34 = ["nico", 1212, false, "little bit"];  //무엇을 의미하는지 알 수 없어 좋지 않다.


const player = { //OBJECT, player 자체가 object로써 constant
    name : "oro",
    points : 10,
    fat : true,
}; 
console.log(player.name);
console.log(player['name']);
player.lastName = "Lee";
console.log(player);


// ############################### 2.7 FUNCTIONS
function  sayHello(name, age) {
    console.log("Hello My name is "+ name);
}
sayHello("oro", 10);

function plus(a,b){
    console.log(a,b);
    console.log(a+b);
}
plus();

function plus(firstNum, secondNum){
    console.log(firstNum+secondNum);
}
plus(8,60);

const player2 = {
    name : "oro",
    sayHello : function(otherPersonsName){
        console.log("hello!" + otherPersonsName);
    },
};
player2.sayHello("lyhn");

// ############################### 2.11 RETURN
const age = 96;
function calculateKrAge(ageofForeinger){
    return ageofForeinger + 2;
    console.log("bye"); //콘솔에 찍히지 않음. 함수의 종료는 return
}

const KrAge = calculateKrAge(age);
console.log(KrAge);

// ############################### 2.13 CONDITIONAL
//const age2 = prompt("How old are you?"); //old fashioned, JS를 중단시킴.
//console.log(typeof age2, typeof parseInt(age2));

//const age3 = parseInt(prompt("How old are you?"));
//console.log(isNaN(age3)); //NaN이 False == Number

// if(isNaN(age3)){
//     //age3가 숫자가 아니라면
//     console.log("Please write a number");
// } else if (age < 18) {
//     //age3가 18보다 작다면
//     console.log("You are too young");
// } else {
//     console.log("You are adult");
// }

// ############################### 3.1 HTML in JAVASCRIPT
//const title = document.getElementById("title"); //HTML의 내용을 JS에서 가져오기
//console.dir(title);

//title.innerText = "Got you"; //HTML의 내용을 JS에서 변경하기

const hellos = document.getElementsByClassName("hello");
console.log(hellos); //array 반환

//let title = document.getElementsByTagName("h1");
//console.log(title); //array 반환

//title =  document.querySelector(".hello h1"); //CSS 방식, 하나의 element를 반환
//title.innerText = "Hello";
//console.log(title);

//title = document.querySelector('#hello');
//title = document.getElementById('hello'); 

//title.style.color = "blue";

// ############################### 3.3 EVENTS
const h1 = document.querySelector("div.hello h1");


function handleMouseEnter() {
    console.log("mouse is here!");
}


//h1.addEventListener("click", handleTitleClick); //event, event발생 시 호출할 function
//title.onclick = handleTitleClick;
h1.addEventListener("mouseenter", handleMouseEnter);


// ############################### 3.6 CSS IN JS
function handleTitleClick() {
    const clickedClass = "active";
//     if(h1.classList.contains(clickedClass)){
//     h1.classList.remove(clickedClass);
//    } else {
//     h1.classList.add(clickedClass);
//    }
    h1.classList.toggle(clickedClass);
}

h1.addEventListener("click", handleTitleClick);