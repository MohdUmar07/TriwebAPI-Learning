function product(productName, price) {
    this.productName = productName;
    this.price = price;
    
}

// const p1 = new product("Phone", 1000);
// const p2 = new product("Backcover", 100);

function student(sname,productName,price) {
    
    product.call(this,productName,price)
    this.sname = sname;
}

const s1 = new student("Anas","Laptop",10000);
console.log(s1.productName,s1.price,s1.sname);

console.log("-----------------------------------------");

console.log(`${s1.sname} Purchased a ${s1.productName} in only ${s1.price}₹ `);