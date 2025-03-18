// QUESTION 1
const str = "extravaganza";
const lastFour = str.slice(-5);
console.log(lastFour);

// QUESTION 2
let food = "The quick fox jumped over the lazy dog";
food = food.slice(0,4) + "eat"+ food.slice(4);
console.log(food);

// QUESTION 3
let story = "The quick brown fox jumps over the lazy dog";
function countOccurences(text,word){
    return text.toLowerCase().split(word.toLowerCase()).length-1;
}
    console.log(countOccurences(story, "the"));
    console.log(countOccurences(story, "brown"));

// QUESTION 4
    let string1 = "The pupils are reading in thelibrary";
    let String2 = "The child was sitting on the table before it fell";

    let word1 = string1.includes("are")? "are" : "not found";
    let word2 = String2.includes("sitting")? "sitting" :"not found";

    console.log(word1);
    console.log(word2);

    // QUESTION 5
    let wonderfulStr = "wonderful";
    console.log("UpperCase:", wonderfulStr.toUpperCase());
    let amazingStr = "amazing";
    let underneathStr = "UndERneath";
    console.log("LowerCase (amazing):", amazingStr.toLowerCase());
    console.log("LowerCase (UndERneath):", underneathStr.toLowerCase());
    let titleStr = "A wonderful world";
    let titleCaseStr = titleStr
      .toLowerCase()
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    console.log("Title case:", titleCaseStr);
   