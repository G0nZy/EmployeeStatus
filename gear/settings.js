

const mysql = require('mysql')



let connect = mysql.startConnect({
    port:8080,
    host:'localhost',

});



connect.connect(function (err){

    if(err){
        console.log('whoops something went wrong');
        return;

    }

});

module.exports = connect;