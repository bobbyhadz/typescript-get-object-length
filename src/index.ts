export {};

// EXAMPLE 1 - Get the length of an Object in TypeScript

interface Person {
  id: number;
  name: string;
  age: number;
}

const obj: Person = { id: 1, name: 'bobby hadz', age: 30 };

// 👇️ const length: number
const len = Object.keys(obj).length;

console.log(len); // 👉️ 3

// ---------------------------------------------------

// // EXAMPLE 2 - Get the Length of an Object using a `for...in` loop in TypeScript

// interface Person {
//   id: number;
//   name: string;
//   age: number;
// }

// const obj: Person = { id: 1, name: 'Bobby Hadz', age: 30 };

// let len = 0;

// for (const key in obj) {
//   if (obj.hasOwnProperty(key)) {
//     len += 1;
//   }
// }

// console.log(len); // 👉️ 3

// ---------------------------------------------------

// // EXAMPLE 3 - Get the Length of an Object using `Object.values()`

// interface Person {
//   id: number;
//   name: string;
//   age: number;
// }

// const obj: Person = { id: 1, name: 'Bobby Hadz', age: 30 };

// const len = Object.values(obj).length;
// console.log(len); // 👉️ 3

// ---------------------------------------------------

// // EXAMPLE 4 - Get the Length of an Object using `Object.entries()`

// interface Person {
//   id: number;
//   name: string;
//   age: number;
// }

// const obj: Person = { id: 1, name: 'Bobby Hadz', age: 30 };

// const len = Object.entries(obj).length;
// console.log(len); // 👉️ 3
