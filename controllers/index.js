var index = new Index();
var nunjucks = require('nunjucks');
var homeData = require('../modules/index.js');
function Index(){
	this.getHomePage = function(req, res, next){
		//获取渲染首页需要的数据
		homeData.getAll(function(err, data){
			if(err){
				console.log(err.message);
				return false;
			}
			res.render('../views/index.html',{
				"data":data
			});
		});
	};

	//页面找不到错误处理
	this.handleErr = function(err, res, req){
		res.statusCod = 404;
		console.log(res.statusCod)
		res.render('error.html', {
			status: 404,
			title: 'NodeBlog'
		});
	}
}

module.exports = index;	