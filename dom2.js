//DOM 2nd part

//Attributes
// let div=document.querySelector("div");
// console.log(div);

// let name=div.getAttribute("id");
// console.log(name);

// let para=document.querySelector("p");

// console.log(para.setAttribute("class","newclass"));

//style
let div=document.querySelector("div");
div.style.backgroundColor="green";
div.style.fontSize="26px";
div.innerText="Hello!";
//div.style.visibility="hidden";
//to insert new element APPENED

let newBtn= document.createElement("button");
newBtn.innerText="click me!"
console.log(newBtn);

let div =document.querySelector("div");
div.append(newBtn);
let newHeading =document.createElement("h1");
newHeading.innerHTML ="<i>Hi , i am new!</i>";

document.querySelector("body").prepend(newHeading);

let para =document.querySelector("p");
para.remove();




