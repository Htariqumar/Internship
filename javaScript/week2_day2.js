/* 
// to find duplicate values in an array 

let arr=[1,2,1,2,3,4,5,5,5,5];
console.log(arr);
let counted=[];
for(let i=0;i<arr.length;i++){
    let count=0;
    for(let j=arr.length-1;j>=0;j--){
        if(arr[i]==arr[j]){
            count++;
        
        }
    }
      if (count > 1 && !counted.includes(arr[i])) {
    console.log(`${arr[i]} appears ${count} times`);
    counted.push(arr[i]);
}
}

//concatenation of array into sub array 

let arr2=[[1,2,3],[4,5],[6,7]];
let result=[].concat(...arr2);
console.log("the concatenated array is:"+result);

//way2:
let arr3=[[0,9,8],[7,6,5],[1,2]];
let result2=[];
for(let k=0;k<arr3.length;k++){
    for(let l=0;l<arr3[k].length;l++){
        result2.push(arr3[k][l]);
    }
}
console.log(result2);

//way3:
let arr4=[[1,8,3],[9,5],[0,7]];
let result3=arr4.flat();
console.log("the concatenated array is:"+result3);



let arr3=[[0,9,8],[7,6,5],[1,2,6]];  
let result2=[];
for(let k=0;k<arr3.length;k++){
    for(let l=0;l<arr3[k].length;l++){
        result2.push(arr3[k][l]);
    }
}
console.log(result2);

//using recursion 



function outerArray(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      
      let inner = outerArray(arr[i]);
      for (let j = 0; j < inner.length; j++) {
        result.push(inner[j]);
      }
    } else {
     
      result.push(arr[i]);
    }
  }

  return result;
}

let arr = [1, [2, 3, [4, 5], 9], 8];
console.log(outerArray(arr));
// [1, 2, 3, 4, 5, 9, 8]

**/

function func1(arr){
    let result=[];
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            let inner=func1(arr[i]);
            for(let j=0;j<inner.length;j++){
                result.push(inner[j]);
            }
        }
        else{
            result.push(arr[i]);
        }
    }
    return result;
}
let arr=[1,[2,3,4,[11,12,13]],[5,7],9,10];
console.log(func1(arr));