

module.exports.add = (req, res)=>{

    let n1 = req.body.num1;
    let n2 = req.body.num2;
    let sum = n1+n2;
    res.send(`sum = ${sum}`);
};


module.exports.subtract = (req, res)=>{

    let n1 = req.body.num1;
    let n2 = req.body.num2;
    let diff = n1-n2;
    res.send(`Diffrence = ${diff}`);
};


module.exports.multiply = (req, res)=>{

    let n1 = req.body.num1;
    let n2 = req.body.num2;
    let multiply = n1*n2;
    res.send(`Product = ${multiply}`);
};


module.exports.divide = (req, res)=>{

    let n1 = req.body.num1;
    let n2 = req.body.num2;
    let quotient = n1/n2;
    res.send(`Quotient = ${quotient}`);
};

