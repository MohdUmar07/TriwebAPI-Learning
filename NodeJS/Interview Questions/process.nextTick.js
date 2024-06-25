function add(callby,n1,n2){
    console.log(callby,":",n1+n2);
}


setImmediate(()=>{
    add("SetImmediate",2,3);
}); 

setTimeout(() => {
    add("SetTimeout",3,5);
}, 0);

process.nextTick(()=>{
    add("Process NextTick",4,5);
});

add("Direct",4,3);