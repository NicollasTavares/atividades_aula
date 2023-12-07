const crud = require('../models/crud')

const filePath = './data/db.contatos.json';

const home =(req, res) => {
    let pessoas = crud.read(filePath);
    // let pessoas = [
    //     {nome: 'Nicollas',idade:18},
    //     {nome: 'Mirian S2',idade:18},
    //     {nome: 'Gigi',idade:23},
    //     {nome: 'Juca',idade:18},
    // ]
    res.render('home',{gostandoDeExpHbs: false,dados:pessoas });
}



module.exports={home};