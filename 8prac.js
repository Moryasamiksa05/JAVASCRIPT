//student avg marks calculate
let marks=[18,19,44,37,89,90];
let sum=0;

for(let value of marks){
    sum=sum+value;

}
console.log(sum);
let avg=sum/marks.length;
console.log(`avg marks of the class= ${avg}`);
//second prac. question
let items=[250,890,50,400];
let idx=0;

for(let value of items){
    console.log(`value of index ${idx} = ${value}`);
    let offer=value/10;
    items[idx]=items[idx] -offer;
    console.log(`value after offer=${items[idx]}`);
    idx++;
}
