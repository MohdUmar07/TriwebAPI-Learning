function* getNum(index){
    while(index < 10){
        yield index;
        index++;
    }
}

let it  = getNum(0);


for (value of it) {
    console.log(value);
    
}

console.log(it.next().done);