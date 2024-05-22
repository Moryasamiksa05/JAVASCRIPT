//DOCUMENT OBJECT MODEL
alert("hello guys!");
console.dir(document.body.childNodes[1]);
document.body.style.backgroundColor="purple";
document.body.childNodes[3] ="Javascript";
//DOM MANIPULATION

let heading=document.getElementById("header");
console.log(heading);
//by class
let headings=document.getElementsByClassName("heading");

console.dir(headings);
console.log(headings);
//selecting with tag
let parahs=document.getElementsByTagName("p");
console.dir(parahs);
//dom manipulation(query selector)
let elements=document.querySelector("p");
console.die(elements);
let allelements=Document.querySelectorAll("p");
console.log(allelements);
let allelements1=Document.querySelectorAll(".heading");
console.log(allelements1);//in id use#
//dom properties
//tag name
//inner text
let div=document.querySelector("div");
console.log(div);
//innerhtml

//text content
//practice qu1



