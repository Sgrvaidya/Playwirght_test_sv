
function counter(){
    let c=0;
    return () => ++c;
}
const inc = counter();
inc();
inc();
console.log(inc());

function StringCounter(): string {
    let str = "Welcome to typesript";
    const stringreverse = str.split("").reverse().join("");
    console.log(stringreverse);
    return stringreverse;

}
const strcount = StringCounter();
console.log(strcount);



function StringReverseKeeping(str: string): string {
    return str.split("").reverse().join("");
}
console.log("Reversed : "+StringReverseKeeping("Hello, World!"));



function reverseIndividualWords(str: string): string {
  return str
    .split(" ")                 // 1. Split the string into an array of words
    .map(word =>                // 2. Map through each word
      word
        .split("")              //    - Split the word into individual characters
        .reverse()              //    - Reverse the characters
        .join("")               //    - Join the characters back into a reversed word
    )
    .join(" ");                 // 3. Join the reversed words back with spaces
}

// Example Usage:
const inputStr = "hello world example";
const outputStr = reverseIndividualWords(inputStr);

console.log("Keeping words spaces: " + outputStr); 
// Output: "olleh dlrow elpmaxe"

//input "am the i best"
//output "i am the best"
