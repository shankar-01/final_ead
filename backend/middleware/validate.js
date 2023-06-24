module.exports=  function(req, res, next){
    const {title,description, ingredients,instruction, file} = req.body
    if(!title || !description || !ingredients || !instruction || !file){
        return res.send({msg:"data is incomplete"})
    }
    next()
}