
const Cliente = require('../models/contato.model');
const conMysql = require('../dao/connection.database');

const crud = require('../models/crud')

const contato =(req, res) => {
    res.render('contato');
}

const filePath = './data/db.contatos.json';
const salvaContato = (req, res) => {
    let cliente = new Cliente(req.body)

    crud.read(filePath)

    cliente.id = crud.verificaId();
    if(cliente.id > 0){
        crud.create(cliente, filePath);
    }else{
        console.log('Ocorreu um erro!');
    }
    // conMysql.query(cliente.create())
    // console.log(cliente);
    // const {nome, email, senha} = req.body;
    // console.log(nome, email, senha);
    res.redirect('/');
}

module.exports={contato, salvaContato};