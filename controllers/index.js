var fs = require('fs');
var index = new Index();
// var nunjucks = require('nunjucks');
var dir = require('node-dir');
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

		dir.paths(__dirname, true, function(err, paths) {
		    if (err) throw err;
		    console.log('paths:\n',paths);
		});
		dir.files('views/pc/static', function(err, files) {
		    if (err) throw err;
		    files = files.filter(function (file) {
		            return file.indexOf('.DS_Store') === -1;
		        });
		    files = files.map(function(item){
		    	return item.substr(16);
		    })
		    console.log(files);
			res.render('../views/pc/index.html', {
				'files' : files
			});
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