let marks=[95,35,78,99,45,89];

 let toppers=marks.filter((val)=>{

    return val> 90;
})
console.log(toppers);
//2nd prac
 let n=prompt("enter a number: ");
 let arr=[];
 for(let i=1;i<=n;i++){
    arr[i-1] =i;
 }
 console.log(arr);
 let sum=arr.reduce((res,curr)=>{
    return res+curr;
 })
 console.log(sum);
 //3rd prac

 

