// How to set prefix before every line you log?

// const addPrefixToEveryLine = (strToAddPrefix) => {
//     const prefixToAdd = "$ "
//     const splittedStr = strToAddPrefix.split("\n");
//     const mappedListOfStr = splittedStr.map((str) =>{
//         return prefixToAdd + str;
//     });
//     const finalList = mappedListOfStr.join("\n");
//     return finalList;
// }

const addPrefixToEveryLine = (strToAddPrefix) => {
    const prefixToAdd = "$ "
    return strToAddPrefix
        .split("\n")
        .map((str) => prefixToAdd + str)
        .join("\n");
};


const strToLog = addPrefixToEveryLine(`Hi, I'm Mohd Umar
Student of BCA.`);

console.log(strToLog);
