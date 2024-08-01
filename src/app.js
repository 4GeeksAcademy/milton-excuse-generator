/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

// 0.99 / 1 math.floor 0
// 0.4124124123123124

function randomGenerator(arr) {
  let random = Math.floor(Math.random() * arr.length);

  return arr[random];
}

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  let excuse = `${randomGenerator(who)} ${randomGenerator(
    action
  )} ${randomGenerator(what)} ${randomGenerator(when)}`;
  document.getElementById("excuse").innerHTML = excuse;
};
