/**
 * Created by bby on 15/4/16.
 */
var list = new List();
var nunjucks = require('nunjucks');
var productsData = require('../modules/products.js');
function List(){
    this.getListById = function(req, res, next){
        //获取渲染商品列表需要的数据
        productsData.getListById({id:req.params.id},function(err, data){
            if(err){
                console.log(err.message);
                return false;
            }
            console.log(data);
            res.render('../views/lists/item/product.html',{
                "data":data
            });
        });
    };
}

module.exports = list;