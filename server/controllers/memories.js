
const db = require("../models");

exports.createMemories = (req, res) => {
    db.Memories.create({
        description: req.body.description,
        title: req.body.title,
        imageurl: req.body.imageurl
    })
        .then((data) => res.send(data))
        .catch((err) => { console.log(err) })
}

exports.getMemories = (req, res) => {
    db.Memories.findAll({})
        .then((data) => { console.log(data); res.json(data) })
        .catch((err) => { console.log(err) })
}

exports.updateMemories=(req, res)=> {
    db.Memories.findAll({ where: { id: req.body.id } })
        .then(function (data) {
            const memoID = (data[0].dataValues.id);
            db.Memories.update(req.body,
                {
                    where: {
                        id: memoID
                    }
                })
                .then(function (dbmemo) {
                    res.json(dbmemo);
                });
        })
        .catch(function (err) {
            res.status(401).json(err);
        })
}

exports.filterDate=(req, res)=> {
    db.Memories.findAll({ where:{ createdAT: req.query.date } })
        .then(function (data) {
            console.log(data)
            res.json(data);
        })
        .catch(function (err) {
            res.status(401).json(err);
        })
}

exports.deleteMemories = (req, res) => {
    console.log(req.query)
    db.Memories.destroy({ where: { id: req.query.id } })
        .then(function (data) {
            res.json(data);
        })
        .catch(function (err) {
            res.status(401).json(err);
        })
}