var statichtml = new Statichtml();
var nunjucks = require('nunjucks');
var fs = require('fs');
var async = require('async');

function Statichtml(){
	this.pushHtml = function(req, res, next){
		var files = [],
			filesName = req.body.file.split(','),
			staticRootPath = 'pc/static/';
		for(var i = 0, l = filesName.length; i < l; ++i){
			files.push({
				name:filesName[i].split('/').pop(),
				nunjucksContent: '',
				path: filesName[i].split('/').slice(0,filesName[i].split('/').length-1).join('/'),
				renderPath : staticRootPath + filesName[i]
			});
		}

		async.each(files,function(item, cb){

			item.nunjucksContent = nunjucks.render(item.renderPath);

				fs.exists('./build/'+item.path, function (exists) {

					var tasks = [];
					if(!exists){
						tasks.push(function(callback){
							fs.mkdir('./build/'+item.path, function(err){
								callback(err);
							});
						})
					}
					tasks.push(function (callback) {
						fs.writeFile('./build/'+item.path+item.name, item.nunjucksContent, function (err) {
							console.log('save');
							callback(err);
						});
					});
					async.waterfall(tasks, function (err) {
						cb(err);
					})
			});

		},function(err){
			if(err){
				throw err;
			}
		});
	};
}

module.exports = statichtml;