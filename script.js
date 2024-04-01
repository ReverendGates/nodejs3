// Task 1

// let greetName = greet("Ilya");

// function greet() {
//     return function(name) {
//         alert(`Hello ${name}`)
//     }
// }

// greetName("Ilya")


// Task 2

// let person = new Person("Brian", 27)

// function Person(name, age) {
//     this.name = name,
//     this.age = age
// }

// Person.prototype.greet = function() {
//     alert(`Hello ${this.name}. Your age is ${this.age}`)
// }

// person.greet()


// Task 3

// function recursion(n) {
//     if (n === 0) {
//         return 1
//     } 
//     else {
//         return n * recursion(n - 1)
//     }
// }

// alert(recursion(5))


//Task 4

// async function getJson(url, callback) {
//     let response = await fetch(url);
//     let data = await response.json();
//     callback(data);
// }

// getJson("https://jsonplaceholder.typicode.com/photos/1", console.log);


// Task 5

// let person = {
//     name: "Synyster",
//     surname: "Gates",
//     age: 33
// }

// function destruct(person) {
//     let {name, surname, age} = person
//     alert(`I'm ${name} ${surname}. Age is ${age}`)
// }

// destruct(person)


// Task 6

// function mergeArr(...arrs) {
//     let merged = [].concat(...arrs);
//     return [...new Set(merged)];
// }

// alert(mergeArr([13, 56, 24], [24, 97, 68]));


// Task 7

// let array = [13, 17, 21, 27];

// function checkpush(arr, n) {
//     arr = arr || [];
//     if (!arr.includes(n)) {
//         arr.push(n);
//         alert(array);
//     } 
//     else {
//         alert("Number is already in array")
//     }
// }

// checkpush(array, 33);


// Task 8

// let users = [
//     { name: "Matthew", age: 31, email: "Sanders@gmail.com" },
//     { name: "Brian", age: 27, email: "Haner@gmail.com" },
//     { name: "Zachary", age: 27, email: "Vengance@gmail.com" },
//     { name: "Jonathan", age: 30, email: "Christ@gmail.com" },
//     { name: "Brooks", age: 36, email: "Wackerman@gmail.com" }
// ]

// function under30(users) {
//     return users
//     .filter(user => user.age < 30)
//     .map(user => user.name)
//     .reduce((acc, name) => acc ? `${acc}, ${name}` : name, "");
// }

// alert(under30(users));


// Task 9

// async function fetchData(url) {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
// }

// fetchData("https://jsonplaceholder.typicode.com/photos/1");


// Task 10

function* randomNum(start, end) {
    while (true) {
        yield Math.floor(Math.random() * (end - start + 1)) + start;
    }
}

const randomNums = randomNum(0, 17);
for (let i = 0; i < 17; i++) {
    alert(randomNums.next().value);
}