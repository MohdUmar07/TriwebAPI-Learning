Array.prototype.last = function() {
    
    return this.length === 0 ? -1 : this[this.length -1];


    // if(this.length){
    //     return this[this.length -1];
    // } else{
    //     return -1;
    // }
    
}

arr = [25,25];


console.log(arr.last());