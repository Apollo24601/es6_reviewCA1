// tools.js

// 1. Modularity (exports)

// 2. Class
export class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

// 3. Promise
export const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 1000);
  });
};

// 4. Async/Await
export const getData = async () => {
  const data = await fetchData();
  return data;
};

// 5. Map
export const doubleNumbers = (arr) => {
  return arr.map(num => num * 2);
};