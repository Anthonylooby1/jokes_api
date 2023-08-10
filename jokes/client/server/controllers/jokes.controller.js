const Jokes = require("../models/jokes.model")



module.exports.apiTest = (req,res)=> {
    res.json({message:"ok"})
}

module.exports.allJoke = (req,res)=> {
    Jokes.find()
    .then((allJokes)=> {
        res.json(allJokes)
    })
    .catch((err)=> {
        res.json(err)
    })
}

module.exports.oneJoke = (req,res)=> {
    Jokes.findOne({_id: req.params.id})
    .then(oneJoke=>res.json(oneJoke))
    .catch((err)=>{
        res.json(err)
    })
}

module.exports.addJoke = (req,res)=> {
    Jokes.create(req.body)
    .then(newJoke=>res.json(newJoke))
    .catch((err)=> {
        res.json(err)
    })
}

module.exports.updateJoke = (req,res)=> {
    Jokes.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators:true}
        )
        .then(updateJoke => {
            res.json(updateJoke)
        })
        .catch((err)=> {
            res.json(err)
        })
}

module.exports.deleteJoke = (req,res)=> {
    Jokes.deleteOne({_id: req.params.id})
    .then(deleteJoke => {
        res.json(deleteJoke)
    })
    .catch((err)=> {
        res.json(err)
    })
}