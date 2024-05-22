// function abc(){
//     console.log("hello");
// }


// function myfun(abc){
//     return abc;
// }
let arr=[9,6,7,8,9,0];
// arr.forEach(function printval(val) {
// console.log(val);
// })
arr.forEach((val,idx,arr)=>{
    console.log(val,idx,arr);
})
//higher order fun is for each which used fun as a parameter
//practice que
 let nums=[3,5,4,3,6,7,8,8];
 nums.forEach((num)  => {
    console.log(num*num);
 })
 //maps in array
 nums.map((val)=>{
    console.log(val);
 })
 //filter method
 let arr1=[3,6,8,4,2,76];
 let evenArr=arr1.filter((val)=>{
    return val %2===0;
 })
 console.log(evenArr);
 //reduce method
 
const output=arr1.reduce((res,curr)=>{
    return res +curr;
 });
 console.log(output);