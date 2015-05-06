var fs = require('fs');
var index = new Index();
// var nunjucks = require('nunjucks');
var homeData = require('../modules/index.js');
function Index(){
	this.getHomePage = function(req, res, next){
		//获取渲染首页需要的数据
		// homeData.getAll(function(err, data){
		// 	if(err){
		// 		console.log(err.message);
		// 		return false;
		// 	}
		// 	res.render('../views/pc/index.html',{
		// 		"data":data
		// 	});
		// });

		// 读取静态目录下的静态文件名
		fs.readdir('views/pc/static', function(err, data){
			// data.forEach(function(element, index){
			// 	if(!element.test('/.html/')){
			// 		fs.readdir('views/pc/static/'+element,function(){})
			// 	}
			// });

			res.render('../views/pc/index.html', {
				'files' : data
			});
			// console.log(data);
		});
	};

	//页面找不到错误处理
	this.handleErr = function(err, res, req){
		res.statusCod = 404;
		console.log(res.statusCod)
		res.render('../views/pc/error.html', {
			status: 404,
			title: 'NodeBlog'
		});
	}
}

module.exports = index;	