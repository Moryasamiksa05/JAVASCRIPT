//Events
let btn1=document.querySelector("#btn1");

// btn1.onclick = (evt) =>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
    
// }


btn1.addEventListener("click", (evt) =>{
    console.log("Button was clicked! -handler1");

    // console.log(evt);

    // console.log(evt,type);
});

btn1.addEventListener("click", (evt) =>{
    console.log("Button was clicked! -handler2");

    // console.log(evt);

    // console.log(evt,type);
});
const handler3 =() =>{
    console.log("Button was clicked! -handler3");

    // console.log(evt);

    // console.log(evt,type);
};

btn1.addEventListener("click", (evt) =>{
    console.log("Button was clicked! -handler4");

    // console.log(evt);

    // console.log(evt,type);
});

btn1.addEventListener("click",handler3);
btn1.removeEventListener("click",handler3);

let div=document.querySelector("div");
div.onmouseover =() =>{
    console.log("you are inside div");
};
//event listeners
