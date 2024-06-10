let n = 5; // n is some value from user

outer:
for(let i=1; i<=n; i++){ // outer loop
    
    inner:
    for(let j=1; j<=n; j++){ //inner loop
        
       
        if(j==3){
            continue outer;
        }
        console.log(i, " ", j);
    }

   
}