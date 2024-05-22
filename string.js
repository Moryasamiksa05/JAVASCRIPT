//string
let str="hello";
//let str2='hi';
console.log(str[0]);
console.log(str[4]);
//template literals

let sentence=`this is template literals`;
console.log(sentence);
console.log( typeof sentence);

let obj={
    item:"pen",
    price:10,
};
//console.log("the cost of ",obj.item,"is",obj.price,"rupees");
let output=`the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

console.log("samiksha \n maurya");
let str2=console.log("samiksha \t maurya");
console.log(str2.length);
 let str3="samiksha";
let newstr3=str3.toUpperCase();
console.log(str3);
console.log(newstr3);