const fs = require('fs');
const path = require('path');
/* const productsFilePath = path.join(__dirname, '../database/productDataBase.json'); */
/* const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); */


const mainController = {

    index: (req, res) => {
        res.render("index");
},
    casaNegra:(req,res) =>{

        res.render ("casaNegra")

    },
    reservationForm: (req, res) => {
        res.render ("reservationForm")
    },
    servicios:(req,res) => {
        res.render ("servicios")
    }

}

module.exports = mainController