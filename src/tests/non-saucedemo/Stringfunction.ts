//input "am the i best"
//output "i am the best"
export{};

function moveIToStart(input: string): string {
	const words = input.trim().split(/\s+/);
	const iIndex = words.findIndex(word => word === "i");

	if (iIndex > 0) {
		words.unshift(words.splice(iIndex, 1)[0]);
	}

	return words.join(" ");
}

const input = "am the i best";
console.log(moveIToStart(input));


function sortWordsByLength(input: string): string {
    const words = input.trim().split(/\s+/);
    words.sort((a, b) => a.length - b.length);
    return words.join(" ");
}  
const inputStr = "this am the i best";
const outputStr = sortWordsByLength(inputStr);

console.log(outputStr);