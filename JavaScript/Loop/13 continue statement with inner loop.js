let n = 5; // n is some value from user

for(let i=1; i<=n; i++){ // outer loop
    
    
    for(let j=1; j<=n; j++){ //inner loop
        
       
        if(j==3){
            continue;
        }
        console.log(i, " ", j);
    }

   
}