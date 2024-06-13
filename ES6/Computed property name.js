let key = "new_key";

function ret(){
    return "someValues"
}


let obj = {
    sName: "Anas",
    [key + 2 + ret()]: "Yes",

}

console.log(obj);