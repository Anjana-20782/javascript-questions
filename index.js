//1. remove duplicate from an array

// let str = "my name is anjana my friend name kannettan";

// function removeDuplicate(sentence) {
//   let words = sentence.split(" ");
//  let uniqueWords = new Set(words);
// return [...uniqueWords].join(" ");
// }
// console.log(removeDuplicate(str));







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








// find the second largest number in array


// let arr=[5,7,3,8,4,10];
// n=arr.length;
// for(i=0;i<n;i++)
// {
//     for(j=0;j<n-i;j++)
//     {
//         if(arr[j]>arr[j+1])
//         {
//             temp=arr[j];
//             arr[j]=arr[j+1];
//             arr[j+1]=temp;
           
//         }

//     }

   
// }

//  console.log(arr[n-2]);











// 3.swap two variables without using a thrd variable

// function swap(a,b){

//       console.log("Before swap: a =", a, ", b =", b);

//       a=a+b;
//       b=a-b;
//       a=a-b;

//     // a=a*b;
//     // b=a/b;
//     // a=a/b;

//       console.log("After swap: a =", a, ", b =", b);

// }

// swap(10,20)









// Implement a function like Array.prototype.map().


// function myMap(arr, callback) {
//   let result = []; 

//   for (let i = 0; i < arr.length; i++) {
   
//     result.push(callback(arr[i], i, arr));
//   }

//   return result; 
// }






// decending order withot using a sort

// let arr=[2,3,5,7,4,1,6,9]
// let n=arr.length
// function sortArray(arr)
// {

// for (i=0;i<n;i++)
//     {
//         for(j=0;j<n-1;j++)
//         {
//             if(arr[j+1]>arr[j]){

//             let temp=arr[j];
//             arr[j]=arr[j+1];
//             arr[j+1]=temp

//             }
//         }
//     } 
    
//     return arr;
    
    
// }

// console.log(sortArray(arr));








// count the frencency of characters in a string

// let result="pineapple"

// function countCharFrequency(str) {
//   let freq = {};   
//   for (let i = 0; i < str.length; i++) {   
//     let char = str[i];   

//     if (freq[char]) {        
      
//       freq[char]++;         
      
//     } else {
//       freq[char] = 1;       
      
//     }
//   }

//   return freq; 
  

// }


// console.log(countCharFrequency(result))






// let arr=["apple","orange","grape","apple","orange","apple"]

// let count={}
// for(i=0;i<arr.length;i++){

//   let item=arr[i]
//   if(count[item]){

//     count[item] +=1
//   }
//   else{

//     count[item]=1
//   }
// } 

// console.log(count)



arr=[]

for(i=1;i<=100;i++){

  if(i%3==0 &&  i%5==0){

    arr.push("buzzfizz")
  }
  else if(i%3==0){

    arr.push("fizz")
  }
  else if(i%5==0){

    arr.push("buzz")
  }
  else{

    arr.push(i)
  }
}

console.log(arr)