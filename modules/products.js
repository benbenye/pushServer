var products = new Products();
var jf = require('jsonfile');
var fs = require('fs');
var util = require('util');
function Products(){
    this.getListById = function(params, cb){
        // get json
        var file = 'data/list.json';
        jf.readFile(file, function(err, obj) {
            if(err){
                console.log(err.message);
            }else{
                if(params.id == "1"){
                    cb(null, obj[0]);
                }else{
                    cb(null, obj[1]);
                }

            }
        });
        // get real data
    };
}
module.exports = products;