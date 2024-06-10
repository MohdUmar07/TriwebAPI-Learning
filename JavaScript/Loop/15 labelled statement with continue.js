let n = 5; // n is some value from user

outer:
for(let i=1; i<=n; i++){
    
    inner:
    for(let j=1; j<=n; j++){
        
        console.log(i, " ", j);
        if(j==3){
            break outer;
        }

    }

   
}

