// variables:

/**
 let x=10;
console.log(x);

let num=10;
num=20;
console.log(num);

const age=20;
age=25;
console.log(age);



let a=5;

{
    let a=10;
    console.log(a);
}

console.log(a);


var x=10;
{
    var x=20;
}
console.log(x);

//data type 

console.log(typeof 100);
console.log(typeof "100");
console.log(typeof true);
let x;
console.log(typeof x);
console.log(typeof null);



//operators

console.log(5+"5");
console.log("5"-2);
console.log(5=="5");
console.log(5==="5");
console.log(10%3);

let x=5;
x++;
console.log(x);

let c=10;
console.log(c++);
console.log(c);

let d=9;
console.log(++d)

console.log(true && false);
console.log(true || false);


// conditions 

let age=11;
if(age>=18){
    console.log("adult");
}
else {
    console.log("Minor");
}

let marks=75;
if (marks>=90){
    console.log("A");
}
else if(marks>=80){
    console.log("B");
}
else{
    console.log("failed");
}

let x=10;
console.log(x>5? "yes":"No");

let day=3;
switch (day){
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
        
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid");    
}

console.log(""?"yes":"NO");



//loops 

for (let i=0;i<=3;i++){
    console.log(i);
}

let i=1;
while(i<=3){
    console.log(i);
    i++;
}


for(let i=1;i<=2;i++){
    for(let j=1;j<=2;j++){
        console.log(i,j);
    }
}

let arr=["A","B","C","D"]

for(let i of arr){
    console.log(i);
}

let obj={
    name:"Ali",
    age:20
};

for(let i in obj){
    console.log(i,obj[i]);
}

for(let i=1;i<=3;i++){
    console.log("outer");
    for (let j=1;j<=2;j++){
        console.log("Inner");
    }
}


// functions 

function greet(){
    console.log("Helooooo");
}

greet();

function add(a,b){
    return a+b;
}

console.log(add(2,3));


const addi=(a,b)=>{
    return a+b
};
console.log(addi(4,5));



//even or odd

let num=6;
if(num%2===0){
    console.log("Even");
}
else if (num%2!==0){
    console.log("Odd");
}
else {"Number is 0"}

//find largest 


function largest(num1,num2){
if(num1>num2){
    return (num1 +" is larger");
}
else {
    return (num2 + "is larger");
}
}

console.log(largest(20,78));


for(let i=1;i<=100;i++){
    if(i%2==0){
    console.log(i)
    }
}

for(let i=1;i<=10;i++){
    console.log(7*i);
}



let str="JavaScript";
let reversed="";

for(let i=str.length-1;i>=0;i--){
    reversed+=str[i];
}
console.log(reversed)

// vowals in string 

let str2="My name is hafsa";
let vowals=["a","e","i","o","u"];
let count=0;
str2=str2.toLowerCase();
for(let i of str2){
    if (vowals.includes(i))
    {count++;}
}
console.log(count);

// using two loops 

let str3="Hafsa tariq";
let vowals3=["a","e","i","o","u"];
let count2=0;
str3=str3.toLowerCase();

for (let i of str3){
    for(let j of vowals3){
        if (i===j){
            count2++;
        }
    }
}

console.log(count2);

**/

for (let i=1;i<=5;i++){
    let row="";
    for(let j=1;j<=i;j++){
        row+="*";
    }

    console.log(row);
}

console.log(typeof NaN);
console.log(NaN == NaN);
console.log([] == []);
console.log(0 == false);
console.log(0 === false);