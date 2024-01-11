// function
function greet(name, callback) {
  console.log("Hi" + " " + name);
  callback();
}

// callback function
function itCalledMe() {
  console.log("I am callback function");
}

// passing function as an argument
greet("Mobina", itCalledMe);

// too many callbacks

let studentLeft = false;
let studentWatching = false;

function whosInClass(succcesCallback, errorcallback) {
  if (studentLeft) {
    errorcallback({
      name: "Dina",
      message: "khalaban bamerde",
    });
  } else if (studentWatching) {
    errorcallback({
      name: "Sara",
      message: "boro mikham bbimnmt",
    });
  } else {
    succcesCallback("everybody is here !!!");
  }
}

whosInClass(
  (message) => {
    console.log("sucsses" + " " + message);
  },
  (error) => {
    console.log(error.name + " said " + error.message);
  }
);

// what if we write it with promise??

function promiseLeftTheClass() {
  return new Promise((resolve, reject) => {
    if (studentLeft) {
      reject({
        name: "Dina",
        message: "khalaban bamerde",
      });
    } else if (studentWatching) {
      reject({
        name: "sara",
        message: "bro nmikhm bbinmt",
      });
    } else {
      resolve("everybody is here !");
    }
  });
}

promiseLeftTheClass().then(
  (message) => {
    console.log("succes" + " " + message);
  },
  (error) => {
    console.log(error.name + " said " + error.message);
  }
);

// promise
// syntax
// const pro = new Promise((resolve, reject) => {});

// promise statue

// console.log( new Promise((resolve,reject)=>{
// 1) resolve();--> fullfield
// 2) reject(); --> rejected
// 3) <pending> once you creat the promise 
// }));

const gholBede = new Promise((resolve, reject) => {
  let num = 1 + 1;
  if (num == 2) {
    return resolve("Did it");
  } else {
    return reject("Oops!");
  }
});
gholBede
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
