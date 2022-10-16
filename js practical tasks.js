/*JS Practical Tasks */

//Part 1 
// #1 : What will the console display and why?

for (var i = 0; i < 10; i++) {
    setTimeout(function() {
      console.log(i);
   })
};
// Output: 10 (printed 10 times)


/* #2 : Write a JavaScript program to display the current day and time in the following format.  
Sample Output : 
Today is: Friday. 
Current time is: 4PM:50:22
*/

let d = new Date().getDay();
let date = new Date();
const dayH= ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
let w = dayH[d];
console.log("Today is: "+w+".");
let hour = date.getHours();
let t = hour >= 12 ? "PM" : "AM";
let timeNow = hour + t + ":" + date.getMinutes() + ":" + date.getSeconds();
console.log("Current time is: " + timeNow);



/* #3 : Write a JavaScript function that reverse a number. 
Example x = 32243;	
Expected Output : 34223
*/

let num = 32243;
let newArr = [];
let numS = num.toString();
let arr = numS.split("");
for(let i=arr.length-1;i>=0;i--) {
    newArr.push(arr[i]);
}
let output = newArr.join("");
console.log(output);


/* #4 : Write a JavaScript program to calculate the factorial of a number. In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. 
For example, 5! = 5 x 4 x 3 x 2 x 1 = 120 
*/

let intg = 5;
let outPut = 1;
if(intg == 0 || intg == 1) {
    outPut = 1;
} else {
    for(let i=5;i>=1;i--) {
        if(i === 0) {
            break;
        } else {
            outPut *= i;
        }
    }
    console.log(outPut);
}

/*  #5 :  Write a JavaScript program that accepts two integers in prompt() and alert the larger one.*/

let firstDigit = prompt("Enter first digit!");
let secondDigit = prompt("Enter second digit!");
let bigger = Math.max(firstDigit,secondDigit);
alert(bigger);

/*  #6 : Write a simple JavaScript program to join all elements of the following array into a string. 
Sample array: myColor = ["Red", "Green", "White", "Black"];
Expected Output : 
"Red,Green,White,Black"
"Red+Green+White+Black"
*/

let myColor = ["Red", "Green", "White", "Black"];
let combine = myColor.join(",");
let secondCombine = myColor.join("+");
console.log(combine);
console.log(secondCombine);

/*  #7 : Write a JavaScript function to get the month name from a particular date. 
Test Data :
console.log(month_name(new Date("10/11/2009"))); 
console.log(month_name(new Date("11/13/2014")));
Output :
"October" 
"November" 

*/

function month_name(date) {

    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    let month = date.getMonth();
    console.log(monthNames[month]);
}

month_name(new Date("12/23/2012"));


/*  #8 : Write a JavaScript program to test the first character of a string is uppercase or not*/

let word = "Today";
if(word[0].toUpperCase() == word[0]) {
    console.log(true);
} else {
    console.log(false);
}


/*  #9 : Write a JavaScript program to draw a smile*/

var canv = document.querySelector("canvas");
canv.width = window.innerWidth;
canv.height = window.innerHeight;
let c = canv.getContext('2d');

//outher
c.beginPath();
c.arc(200,200,90,6,8*Math.PI,true);
c.fillStyle = "yellow";
c.fill();

// mouth
c.beginPath();
c.arc(200,230,35,0,Math.PI,false);
c.fillStyle = "black";
c.fill();

// left eye
c.beginPath();
c.arc(150,170,10,6,8*Math.PI);
c.fillStyle = "black";
c.fill();

// right eye
c.beginPath();
c.arc(250,170,10,6,8*Math.PI);
c.fillStyle = "black";
c.fill();

//Part 2

/*  #1 : На странице есть верстка:
<div id="string-1">Ядра в вёдра, выдру в тундру!</div>
<div id="string-2">Выдрав с выдры в тундре гетры</div>
<div id="string-3">В недрах тундры, выдры в гетрах </div>
<div id="string-4">Вытру гетрой выдре морду </div>
<div id="string-5">Тырят в вёдра ядра кедров!</div>
<div id="string-6">Вытру выдрой ядра кедров</div>
	
Необходимо поочередно обратиться к каждому тэгу в нужном порядке, и вывести их содержимое в консоль, чтобы получилась осмысленная скороговорка.

Вывод в консоли:
В недрах тундры, выдры в гетрах 
Тырят в вёдра ядра кедров! 
Выдрав с выдры в тундре гетры 
Вытру выдрой ядра кедров 
Вытру гетрой выдре морду  
Ядра в вёдра, выдру в тундру! 

*/

var str = document.getElementById('string-1').innerHTML = "В недрах тундры выдра в гетрах";
var str = document.getElementById('string-2').innerHTML = "Тырят в вёдра ядра кедров!";
var str = document.getElementById('string-3').innerHTML = "Выдрав с выдры в тундре гетры";
var str = document.getElementById('string-4').innerHTML = "Вытру выдрой ядра кедров";
var str = document.getElementById('string-5').innerHTML = "Вытру гетрой выдре морду";
var str = document.getElementById('string-6').innerHTML = "Ядра в вёдра, выдру в тундру!";

/*  #2 : На странице есть верстка

<div class="element">Element 1</div>
<div class="element">Element 2</div>
<div class="element">Element 3</div>
<div class="element">Element 4</div>
<div class="element">Element 5</div>
<div class="element">Element 6</div>

С помощью JS необходимо первым трем  элементам задать красный цвет текста, а остальным трем - зеленый.

*/

let element = document.getElementsByClassName("element");
for(let i=0;i<3;i++) {
    element[i].style.color = "red";
}
for(let i=3;i<6;i++) {
    element[i].style.color = "green";
}

/*  #3 : На странице есть контейнер <ol id="todo-list"></ol>, необходимо с помощью цикла добавить в него пять задач (элементов <li>) с классом task и текстом, взятым из массива задач из пяти элементов: 

const tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];

Ожидаемый результат в инспекторе после выполнения скрипта:

<ol id="todo-list">
  <li class="task">Buy lemonade</li>
  <li class="task">Make toasts</li>
  <li class="task">Repair car</li>
  <li class="task">Play games</li>
  <li class="task">Pet a cat</li>
</ol>

 */

const tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];

let ol = document.querySelector("#todo-list");
for(let i=0;i<tasks.length;i++) {
    
    let listLi = document.createElement('li');
    listLi.className = "task";
    listLi.innerHTML = tasks[i];
    ol.append(listLi);

}

/*  #4 : На странице есть следующая разметка:

<article>
<h3>What is Lorem Ipsum?</h3>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
<h3>Where does it come from?</h3>
<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. from "The Extremes of Good and Evil" by Cicero</p>
<h3>Why do we use it?</h3>
<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
</article>

Вам необходимо с помощью JavaScript вставить после каждого тега <p> тег <hr>, для визуального отделения абзацев друг от друга.
	
Указания:
Подразумевается, что вышеуказанная разметка находится внутри тега <body>.
Нельзя модифицировать указанную разметку.
За использование цикла дополнительные баллы.

*/

const doc = document.body;
for(let i=0; i<doc.childNodes.length;i++) {
    const elementOne = document.querySelectorAll('p')[i];
    const hr = document.createElement("hr");
    elementOne.insertAdjacentElement("afterend", hr);
}


/*  #5 : Дана такая разметка:

<div id="cart-items">
	<div class="item">Milk 1 l.<span class="qty">x 2</span></div>
	<div class="item">Cola 1.5 l. <span class="qty">x 1</span></div>
	<div class="item">Bread <span class="qty">x 2</span></div>
	<div class="item">Cheese <span class="qty">x 1</span></div>
	<div class="item">Chocolate bar <span class="qty">x 3</span></div>
</div>

Необходимо с помощью JavaScript удалить элемент "Cola 1.5 l" и заменить товар "Chocolate bar" на "Canned Fish", количеством 4 штуки.

Указания:
 Для удаления использовать .remove()
Для замены использовать .replaceChild()
Подразумевается, что вышеуказанная разметка находится внутри тега <body>.
*/

const bd = document.body;
const rm = bd.getElementsByClassName("item")[1];
rm.remove();

const parentNode = document.getElementById("cart-items");
const oldDiv = bd.getElementsByClassName("item")[3];

const newDiv = document.createElement("div");
newDiv.className = "item";
newDiv.innerHTML = "Canned Fish";
const newSpan = document.createElement("span");
newSpan.className = "qty";
newSpan.innerHTML = "x 4";
newDiv.appendChild(newSpan);
console.log(newDiv);

parentNode.replaceChild(newDiv, oldDiv);


/*  #6 : Напишите программу для создания списка, которые будет вводить пользователь.
Для каждого пункта:
Запрашивайте содержимое пункта у пользователя с помощью prompt.
Создавайте пункт и добавляйте его к <ul>.
Процесс прерывается, когда пользователь нажимает "Отмена" или вводит пустую строку

*/

const body = document.querySelector("body");
const ul = document.createElement("ul");
body.appendChild(ul);
function getInput() {
    const li = document.createElement("li");
    let inp = li.innerHTML = prompt("Enter value to list!");
    ul.appendChild(li);
    if(inp != null && inp.length > 0) {
    
        const li = document.createElement("li");
        let inp = li.innerHTML = prompt("Enter value to list!");
        ul.appendChild(li);
        getInput();
    }   
}
getInput();