//arrays in js
//push pop toString
//push
let veggies=["patato","cabbage","chilli"];

let marvel_heroes=["thor","spiderman","ironman"];
let dc_heroes=["superman","batman"];
let hero=marvel_heroes.concat(dc_heroes);
console.log(hero);
//unshift method
marvel_heroes.unshift("antman");
//slice
console.log(marvel_heroes.slice(1,3));
//splice method
let arr=[1,23,3,5,6,7];

//arr.splice(2,5,6,7,0);
arr.splice(2,0,101);
//delete element
arr.splice(3,1);
