
function matchArrays(arr1: string[], arr2: string[]): string[] {
    const matchedElements = arr1.filter(element => arr2.includes(element));
    
    return matchedElements;
}
function unmatchArrays(arr1: string[], arr2: string[]): string[] {
    const unMatchedElements = [
        ...arr1.filter(element => !arr2.includes(element)),
        ...arr2.filter(element => !arr1.includes(element)),
    ];
    
    return unMatchedElements;
}
const arr1 = ["A1", "B2", "C3"];
const arr2 = ["A1", "B2", "D4", "E5"];
const matched = matchArrays(arr1, arr2);
const unmatched = unmatchArrays(arr1, arr2);
console.log("Matched elements: " + matched);
console.log("Unmatched elements: " + unmatched);
