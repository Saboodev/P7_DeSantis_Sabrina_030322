exports.getAllPosts = async (req, res, next) => {
    res.send("Get all posts route");
}

exports.createNewPost = async (req, res, next) => {
    res.send("Create New post route");
}

exports.getPostById = async (req, res, next) => {
    res.send("Get post by id route");
}

exports.deletePost = async (req, res, next) => {
    res.send("Delete post route");
}

exports.modifyPost = async (req, res, next) => {
    res.send("Modify post route");
}
