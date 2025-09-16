//1. remove duplicate from an array

let str = "my name is anjana my friend name kannettan";

function removeDuplicate(sentence) {
  let words = sentence.split(" ");
 let uniqueWords = new Set(words);
return [...uniqueWords].join(" ");
}


console.log(removeDuplicate(str));




