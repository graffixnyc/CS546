const dictionary = require('./dictionary')

//passes
console.log("The following will pass:");
try {
    console.log(dictionary.lookupDefinition("programming"));
} catch (error) {
    console.log(error);
}

try {
    console.log(dictionary.lookupDefinition("sleuth"));
} catch (error) {
    console.log(error);
}

try {
    console.log(dictionary.lookupDefinition("charisma"));
} catch (error) {
    console.log(error);
}

try {
    console.log(dictionary.getWord("The action or process of writing computer programs."));
} catch (error) {
    console.log(error);
}

try {
    console.log(dictionary.getWord("to make an official decision about who is right in (a dispute) : to settle judicially"));
} catch (error) {
    console.log(error);
}
try {
    console.log(dictionary.getWord("A sudden or irregular invasion or attack for war or spoils : raid"));
} catch (error) {
    console.log(error);
}

//fails
console.log("The following will fail:");
try {
    console.log(dictionary.getWord("This does not exsist"));
} catch (error) {
    console.log(error);
}

try {
    console.log(dictionary.getWord(5));
} catch (error) {
    console.log(error);
}

try {
    console.log(dictionary.lookupDefinition(5));
} catch (error) {
    console.log(error);
}

try {
    console.log(dictionary.lookupDefinition("fail"));
} catch (error) {
    console.log(error);
}