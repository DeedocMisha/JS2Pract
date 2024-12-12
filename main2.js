//                First
//const text=document.getElementById("hell");
//text.innerText="hello world";
/* Second
let sec = 2.9;
sec=parseInt(sec);
alert(sec);
*/
/*
                Third
// Получаем элементы
const message = document.getElementById('hell');


const sumbitbtn = document.getElementById('sumbit') //Берем элемент в константу
sumbitbtn.onclick = function ()
{
    alert(message.textContent);
}
*/
/*
Fourth
let brick = [1,2,3,4,5,6];
brick.push(5);
brick[6]="hello!"

console.log(brick);
console.log("____________")
hello()
function hello(){
    for(brick in brick){
        console.log(brick);
    }
}
*/
/*Fives
const account = {
    lastname: "Mish",
    year: 2000,
    lang: ['rus','eng','deu'],
    getfullname: function() {
       return `<h2 style="text-align: center;margin: 10px">Твое имя:${this.lastname}</h2>`
    }
}
const nameContainer = document.getElementById('name-container'); // Получаем div
nameContainer.innerHTML = account.getfullname(); // Вставляем текст в div
*/
/*
Six
const button = document.getElementById('but');
button.onclick = function (){
    button.style.background="green";
    button.style.color="black";
};
*/
/*
Seven
let index = ['a','b','c'];
console.log(index);
index.push("Hello");
console.log(`После Push-а:\n Mass:\n ${index}`);
index.splice(1,2,0);
console.log(`Splice (start 1 del 2):\n Mass:\n ${index}`);
index.splice(10,0,"Grood","hello","Good");
console.log(`Splice (start 5 del 0 items Grood,hello,Good):\n Mass:\n ${index}`);
index.pop();
console.log(`Удал 1 посл элемент: \n${index}`);
//Sorting
let abc = [2,3,5,3];
console.log(abc.sort (function (a, b){
return a - b
}))


//Изменить массив добавл чего-либо
const editMassiv = abc.map(function (namme){
    const nammme= namme+ "!";
    return nammme;
})
console.log(editMassiv+"\n\nThis is editMassiv");

//Upper Case
let mas = "hello"
console.log(mas.toUpperCase());

//СОРТИРОВКА обтектов

//1
let people = {
    budget: [50, 100, 200, 300, 400]
};

    const filtered = people.budget.filter(function (p)
{
    return p > 10
});
console.log("\n\n"+filtered);

//2
const sumBudget = people.budget
    .filter((p)=>p>100)
    .map((p)=>p)  //Не надо т.к не меняем массивы
    .reduce((sum,val)=>sum + val,0);

console.log("\n\nСУМБЮДЖ>100:\n"+sumBudget);
*/
/*
Eight
let mas = "hello";
console.log(mas.split(""));

let f = '231'
console.log(typeof Number(f));
//ОТ 50 до 100
console.log(Math.random()*(100-50+1)+50)

console.log(f.repeat(2));
console.log(f.startsWith(3));
f+=' h e l l o !'
console.log(f.trim());

setTimeout(function() {
console.log("Set timeout 2 sec");
},2000)
*/
/*
Nine
console.log(Date.now());

let start = new Date( Date.now());
console.log(start);

start = new Date(2011,0,4);
console.log(start);

//debugger

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName ?? null;
        this.lastName = lastName ?? null;
    }
    sayHello(){
        console.log('Hello from', this.firstName);
    }
}
const person1 = new Person('Misha','Sav');
const person2 = new Person('Roma','Sav');
person1.sayHello();
person2.sayHello();
*/
/*

*/
const delay = (time) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([1, 2, 3]);
        }, time);
    });
    return promise;
}

delay(2500)
    .then((data) => {
        console.log("Timeout:", data);
        return data.map((x) => x ** 2);
    })
    .catch((error) => console.log(error))
    .finally(() => { console.log('Finally') });