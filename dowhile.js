let i=20;
do{

    console.log("Hello guys!");
    i++;
}
while(i<=10);
//for of loop

let str="hello";
let size=0;
for(let a of str){
    console.log("a=",a);
    size++; //iterate the characters
}
console.log("string size= ",size);
//for in loop
//for objects use
let student={
    name:"rahul",
    cgpa:"8",
    isPass:true

};
for(let key in student){
    console.log("key= ",key,"value= ", student[key]);
}