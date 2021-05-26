// console.log('Hello World');
// console.error('this is an error');
// console.warn('this is a warning');

// var, const, let
const age=30;  
const ans = true;
// strings, numbers, boolean, null, undefined, symbol
let namel='Pushpank';
hello = `My name is ${namel} and my age is ${age}`;
//console.log(hello.substring(0,6).toUpperCase());
//console.log(hello.split(' '));

//arrays
//const num = new Array(1,2,3,4,5,6);
const num = ['apples', 'oranges', 'mangos', 12, true];
num[6] = 'lichi';
num.unshift('010');
num.push(false);
num.pop();
//console.log(Array.isArray(num));
//console.log(num.indexOf('apples'));

//object literals
const person = {
    firstname: 'Aditya',
    lastname: 'Gupta',
    age: 18,
    hobbies: ['studing', 'playing', 'series'],
    address: {
        street: 'teen taki',
        city:'Navi Mumbai',
        state: 'Maharastra'
    }
}
person.address.country = 'India';
//const {firstname, address} = person;
// console.log(person.firstname, person.lastname);
// console.log(person);

const todos = [
    {
        id: 1,
        task: 'to wash clothes',
        completed: true
    },
    {
        id: 2,
        task: 'to learn JS',
        completed: false
    },
    {
        id: 2,
        task: 'to clean the room',
        completed: true
    }
];

//console.log(todos[1].task);

//JSON
// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

//For
// for(let i=0; i<todos.length; i++){
//     console.log(todos[i].task);
// }

// for(let todo of todos){
//     console.log(todo.task);
// }

// let p=0;
// while(p<12){
//     console.log(p);
//     p++;
// }

//forEach, map, filter -> High order array methods
// todos.forEach(function(todo){
//     console.log(todo.completed);
// });

// const todoText = todos.map(function(todo){
//     return todo.task;
// });

// const flt = todos.filter(function(todo){
//     return todo.completed===true;
// }).map(function(todo){
//     return todo.task;
// })

// console.log(flt);


//Conditionals

//if ->very easy

//ternary operator
// const x = 10;
// const color = x>10 ? 'red':'blue';
// console.log(color);

// switch(color){
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
// }


//functions
// function addnum(num1, num2){
//     return (num1+num2);
// }

// x = addnum(5,6);
// console.log(x);

//Arrow Functions
// const addNums = (num1, num2) =>{
//     return num1+num2;
// }
// console.log(addNums(12,13));

// const add1 = num1 => num1+10;
// console.log(add1(14));

// Object Oriented Programming

// function Person(firstName, lastName, dob){
//     this.x = firstName;
//     this.y = lastName;
//     this.z = new Date(dob);
//     this.getBirthYear = this.z.getFullYear();
        // this.getFullName = function(){
        //     return this.x + " " + this.y;
        // }
// }
// Person.prototype.getFullName = function(){
//     return this.x + " " + this.y;
// }

//Class
// class Person{
//     constructor(firstname, lastname, dob){
//         this.x = firstname;
//         this.y = lastname;
//         this.z = new Date(dob);
//     }
//     getBirthYear(){
//         return this.z.getFullYear();
//     }

//     getFullName(){
//         return this.x + " " + this.y;
//     }
// }


// const person1 = new Person('Aditya', 'Gupta', '3-23-2003');
// const person2 = new Person('Anirudh', 'Jhudele', '1-9-1995');

// console.log(person2.getFullName());
// console.log(person1)

//Single Element Sleector
//console.log(document.getElementById('my-form'));
//console.log(document.querySelector('.container'));

//Multiple Element Selector
//console.log(document.querySelectorAll('.items'))

// const items = document.querySelectorAll('.items');

// items.forEach(function(item){
//     console.log(item);
// })


//items.forEach((item) => console.log(item))

const ul = document.querySelector('.items');
//ul.remove()
//ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hey There';
ul.children[1].innerText = 'Opps what have I learnt';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';


const btn = document.querySelector('.btn');
btn.style.color = 'red';
//intead of click we can use hover, mouseout, look ndn documentation}
btn.addEventListener('click', function(e){
    //e.preventDefault();
    console.log('clliicckkeedd');
    console.log(e.target.id);
    document.querySelector('#my-form').style.background='red';
    document.querySelector('.items').lastElementChild.innerHTML='Hellooo';
});


const myform = document.querySelector('#my-form');
const name_ = document.querySelector('#name');
const email = document.querySelector('#email');
const msg = document.querySelector('.msg');
const user_list = document.querySelector('#users');

myform.addEventListener('submit', function(e){
    e.preventDefault();
    if(name_.value=='' || email.value==''){
        //alert('Please Enter all the fields');
        msg.classList.add('error');  //For adding css to the class
        msg.innerHTML = 'Please Enter All the Fields';

        setTimeout(()=> msg.remove(), 3000);
    }
    else
    {
        console.log(name_.value);
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${name_.value} : ${email.value}`));

        user_list.appendChild(li);

        //Clearing Fields;
        name_.value ='';
        email.value ='';
    }
});







