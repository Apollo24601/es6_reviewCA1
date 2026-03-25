// index.js

import { Person, fetchData, getData, doubleNumbers } from './tools.js';

// Test Class
const user = new Person("Apollo", 23);
console.log(user.greet());

// Test Promise
fetchData().then(res => console.log(res));

// Test Async/Await
(async () => {
  const result = await getData();
  console.log(result);
})();

// Test Map
const numbers = [1, 2, 3, 4];
console.log(doubleNumbers(numbers));