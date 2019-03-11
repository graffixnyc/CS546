const words ={
    programming: "The action or process of writing computer programs.",
    charisma: "A personal magic of leadership arousing special popular loyalty or enthusiasm for a public figure (such as a political leader)",
    sleuth: "To act as a detective : search for information",
    foray: "A sudden or irregular invasion or attack for war or spoils : raid",
    adjudicate: "to make an official decision about who is right in (a dispute) : to settle judicially"

}

function checkInput(input){
    if (typeof input !=="string") throw "input is not a string";
    return input;
    
}

function lookupDefinition(input){
    checkInput(input);
    if (words[input] == undefined) throw "Error! Word not found!";
    return words[input];
   
}

function getWord(value){
    checkInput(value);
    let getWord =Object.keys(words).find(key => words[key] === value);
    if (getWord == undefined) throw "Word not found for that definition";
    return getWord;
}

module.exports ={lookupDefinition, getWord}