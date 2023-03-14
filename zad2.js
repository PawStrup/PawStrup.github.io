const age = [25, 50, 75, 100, 200];

//Callback functions

const calculateNumberToPowerTwo = (x) => Math.pow(x, 2);
const isAdult = (element) => element > 25;
const reduceCallback = (total, num) => total - num;
const everyCallback = (parameter) => parameter < 30;

//For Each
const forEachFn = (array, callback) => {
  if (!Array.isArray(array) || typeof callback !== "function") {
    return "incorrect input";
  }
  for (const i in array) {
    callback(array[i]);
  }
};

console.log(
  "For Each function returns:",
  forEachFn(age, calculateNumberToPowerTwo)
);

//Map

const mapFn = (array, callback) => {
  if (!Array.isArray(array) || typeof callback !== "function") {
    return "incorrect input";
  }
  const mappedArray = [];
  for (const i in array) {
    mappedArray.push(callback(array[i]));
  }
  return mappedArray;
};

console.log("Map function returns:", mapFn(age, calculateNumberToPowerTwo));

//Entries

// const entriesFn = (array, callback) => {
//   const entriesArray = [];
//   for (i = 0; i < array.length; i++) {
//     entriesArray.push([array.indexOf(array[i]), array[i]]);
//   }
//   return entriesArray;
// };

// console.log(entriesFn(age));

//Filter

const filterFn = (array, callback) => {
  if (!Array.isArray(array) || typeof callback !== "function") {
    return "incorrect input";
  }
  const filteredArray = [];
  for (const i in array) {
    if (callback(array[i])) {
      filteredArray.push(array[i]);
    }
  }
  return filteredArray;
};

console.log("Filter function returns:", filterFn(age, isAdult));

//Reduce

const reduceFn = function (array, callback, initial) {
  if (!Array.isArray(array) || typeof callback !== "function") {
    return "incorrect input";
  }

  let reduced = 0;

  if (Array.from(arguments).includes(initial)) {
    if (typeof initial !== "number") {
      return "incorrect input";
    }
    let i = 0;
    while (array.length > i) {
      reduced = callback(initial, array[i]);
      initial = reduced;
      i++;
    }
    return reduced;
  } else {
    let newInitial = array[0];
    let i = 1;
    while (array.length > i) {
      reduced = callback(newInitial, array[i]);
      newInitial = reduced;
      i++;
    }
    return reduced;
  }
};

console.log("Reduce function returns:", reduceFn(age, reduceCallback, 1000));

//Every

const everyFn = (array, callback) => {
  if (!Array.isArray(array) || typeof callback !== "function") {
    return "incorrect input";
  }
  let statement = Boolean();
  for (const i in array) {
    statement = Boolean(callback(array[i]));
    if (!statement) {
      break;
    }
  }
  return statement;
};

console.log("Every function returns:", everyFn(age, everyCallback));

//Some

const someFn = (array, callback) => {
  if (!Array.isArray(array) || typeof callback !== "function") {
    return "incorrect input";
  }
  let statement = Boolean();
  for (const i in array) {
    statement = Boolean(callback(array[i]));
    if (statement) {
      break;
    }
  }
  return statement;
};

console.log("Some function returns:", someFn(age, everyCallback));
