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

					if(!exists){
						fs.mkdir('./build/'+item.path, function(){
							fs.open('./build/'+item.path+item.name,'w+', function(err, cb){
								if(err) throw err;

								fs.writeFile('./build/'+item.path+item.name, item.nunjucksContent, function (err) {
								  if (err) throw err;
								  console.log('save');
								});
							});
							cb(null);
						});
					}else{
						fs.open('./build/'+item.path+item.name,'w+', function(err, cb){
							if(err) throw err;
							fs.writeFile('./build/'+item.path+item.name, item.nunjucksContent, function (err) {
							  if (err) throw err;
							  console.log('save');
							});
						});
						cb(null);
					}
			});

		},function(err){
			if(err){
				throw err;
			}
		});
	};
}

module.exports = statichtml;