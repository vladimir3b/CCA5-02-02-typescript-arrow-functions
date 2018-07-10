/**
 *  *********************************************************************
 *
 *     CodeCraft - Angular 5:
 * 
 *     02 - ES6 JavaScript & TypeScript - Arrow functions:
 *      
 *      - https://codecraft.tv/courses/angular/es6-typescript/arrow/
 * 
 *    Some problems:
 *      - https://derickbailey.com/2015/09/28/do-es6-arrow-functions-really-solve-this-in-javascript/
 *      - https://dmitripavlutin.com/when-not-to-use-arrow-functions-in-javascript/
 *
 *
 * **********************************************************************
 */

"use strict";


// Write Javascript code!
function consoleToHTML(text: any): void {
  const appDiv = document.getElementById("app");
  if (appDiv) {
    appDiv.innerHTML += text + "<br>";
  }
}
function line() {
  consoleToHTML("--------------------------------------------------------");
}



let person = {
  firstName: "John",
  lastName: "Smith",

  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  }
};

consoleToHTML(person.fullName());
line();

// let person1 = {
//   firstName: "John",
//   lastName: "Smith",

//   fullName: function () {

//     return function() {
//       return`${this.firstName} ${this.lastName}`;
//     }
//   }

// }

// consoleToHTML(person1.fullName()());
// line();

let person1 = {
  firstName: "John",
  lastName: "Smith",

  fullName: function () {
    let self = this;
    return function () {
      return `${self.firstName} ${self.lastName}`;
    };
  }
};

consoleToHTML(person1.fullName()());
line();

let person2 = {
  firstName: "Jane",
  lastName: "Smith",

  // fullName: () => {
  //   return `${this.firstName} ${this.lastName}`;
  // } // this will throw an error -> read this 1a. https://dmitripavlutin.com/when-not-to-use-arrow-functions-in-javascript/

  fullName: function () {
    return () => `${this.firstName} ${this.lastName}`;
  }
};

// DO NOT USE ARROW FUNCTIONS FOR METHOD DEFINITION

consoleToHTML(person2.fullName()());
line();

// Anonymous Functions
setTimeout(function () {
  console.log("Callback function is executed");
}, 2000);

// (Fat) Arrow Function
setTimeout(() => console.log("Callback function is executed again"), 2500);

let addNum = (a: number, b: number): number => a + b;

console.log(addNum(6, 5));

// some other problems with this keyword

let object4 = {
  firstName: 'John',
  lastName: 'Smith',
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  };
  greetPers(): function() {
    console.log(`Hello, ${this.fullName()}.`);
  }
}

object4.greetPers();

// but this doesn't work...

// let object5 = {
//   firstName: 'John',
//   lastName: 'Smith',
//   fullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   };
//   greetPers(): function() {
//     setTimeout(function () {
//       console.log(`Hello, ${this.fullName()}.`);
//       // this throws an error "this.fullName is not a function"
//       // because this != onject5
//     }, 2500);    
//   }
// }

// object5.greetPers();

let object5 = {
  firstName: 'John',
  lastName: 'Smith',
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  };
  greetPers(): function() {
    let self = this;
    setTimeout(function () {
      console.log(`Hello, ${self.fullName()}. I am here...`);
    }, 6500);
  }
}

object5.greetPers();

let object6 = {
  firstName: 'John',
  lastName: 'Smith',
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  };
  greetPers(): function() {
    setTimeout(() => {
      console.log(`Hello, ${this.fullName()}. It has been a while.`);
    }, 3000);
  }
}

object6.greetPers();
