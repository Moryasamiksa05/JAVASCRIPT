let h2=document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText=h2.innerText + "from apna collge students";

let divs=document.querySelectorAll(".box")
console.log(divs[0]);
console.log(divs[1]);
console.log(divs[2]);
divs[0].innerText="new unique value 1";
divs[1].innerText="new unique value 1";
divs[2].innerText="new unique value 2";
//let idx=1;
//for(div of divs){
//     divs.innerText=`new unique value $(idx)`;
//     idx++;
// }