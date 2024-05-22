//arrays
let heroes=["ironman","hulk","thor","batman"];
console.log(heroes);
let marks=[33,56,24,90];
console.log(marks);
console.log(marks.length);//property
//looping in array
for(let idx = 0; idx <heroes.length; idx++){
    console.log(heroes[idx]);
}

//for of loop
for(let hero of heroes){
    console.log(hero);
}
