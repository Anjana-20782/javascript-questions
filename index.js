//1. remove duplicate from an array

let str = "my name is anjana my friend name kannettan";

function removeDuplicate(sentence) {
  let words = sentence.split(" ");
 let uniqueWords = new Set(words);
return [...uniqueWords].join(" ");
}
console.log(removeDuplicate(str));





//2. sort an array in ascending order without usingsort logic
// let arr=[2,3,5,7,4,1,6,9]
// let n=arr.length
// function sortArray(arr)
// {

// for (i=0;i<n;i++)
//     {
//         for(j=0;j<n-1;j++)
//         {
//             if(arr[j]>arr[j+1]){

//             let temp=arr[j];
//             arr[j]=arr[j+1];
//             arr[j+1]=temp

//             }
//         }
//     } 
    
//     return arr;
    
    
// }

// console.log(sortArray(arr));









// 3.swap two variables without using a thrd variable

function swap(a,b){

      console.log("Before swap: a =", a, ", b =", b);

      a=a+b;
      b=a-b;
      a=a-b;

    // a=a*b;
    // b=a/b;
    // a=a/b;

      console.log("After swap: a =", a, ", b =", b);

}

swap(10,20)






// Implement a function like Array.prototype.map().


function myMap(arr, callback) {
  let result = []; 

  for (let i = 0; i < arr.length; i++) {
   
    result.push(callback(arr[i], i, arr));
  }

  return result; 
}





// decending order withot using a sort

let arr=[2,3,5,7,4,1,6,9]
let n=arr.length
function sortArray(arr)
{

for (i=0;i<n;i++)
    {
        for(j=0;j<n-1;j++)
        {
            if(arr[j+1]>arr[j]){

            let temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp

            }
        }
    } 
    
    return arr;
    
    
}

console.log(sortArray(arr));
