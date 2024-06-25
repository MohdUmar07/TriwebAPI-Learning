const getUser = (req, res) =>{
    res.send("User found");
};

const postUser = (req, res) =>{
    res.send("post user ");
};
const putUser = (req, res) =>{
    res.send("put user");
};

module.exports.getUser = getUser;
module.exports.postUser = postUser;
module.exports.putUser = putUser;