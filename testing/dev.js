// function getBrowser() {
//     if (typeof chrome !== "undefined" && typeof chrome.runtime !== "undefined") {
//       return chrome;
//     } else if (
//       typeof browser !== "undefined" &&
//       typeof browser.runtime !== "undefined"
//     ) {
//       return browser;
//     } else {
//       console.log("browser is not supported");
//       return false;
//     }
//   }

// let value = getBrowser()

// console.log(value)

// function isMobile() { 
//   return location.hostname == "m.youtube.com";
// }

// let se = isMobile();

// console.log(se)

// function check() {
//   if(!true) {
//     return "hey"
//   }
//   return "hello"
// }

// const checkhere = check()
// console.log(checkhere)

// function createObserver(options, callback) {
//     const observerWrapper = new Object();
//     observerWrapper.options = options;
//     observerWrapper.observer = "hey";
//     observerWrapper.observe = function (element) {
     
//     };
//     return observerWrapper;
// }

  
// let smartimationObserver = null;

// function createSmartimationObserver() {
//   if (!smartimationObserver) {
//     smartimationObserver = createObserver(
//       {
//         attributes: true,
//         subtree: true,
//       },
//       updateDOMDislikes,
//     );
//     smartimationObserver.container = null;
//   }

//   const smartimationContainer = getButtons().querySelector("yt-smartimation");
//   if (
//     smartimationContainer &&
//     smartimationObserver.container != smartimationContainer
//   ) {
//     cLog("Initializing smartimation mutation observer");
//     smartimationObserver.disconnect();
//     smartimationObserver.observe(smartimationContainer);
//     smartimationObserver.container = smartimationContainer;
//   }
// }


//async function () 

// const myObject = {
//     property1: "value1",
//     property2: 42,
    
//   };

// for (const property in myObject) {
//     console.log(property)
//     const value = myObject[property];
//     console.log(`${property}: ${value}`);
//       // Output each property-value pair
    
//   }

// const value = Object.keys(myObject)
// value.forEach(element => {
//   const answer = myObject[element]
//   console.log(answer)
// });/

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const num =  {
  name: 1
}
const array3 = array1.concat(num);

console.log(array3);
console.log(array1)
// Expected output: Array ["a", "b", "c", "d", "e", "f"]

