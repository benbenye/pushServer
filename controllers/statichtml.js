var statichtml = new Statichtml();
var nunjucks = require('nunjucks');
var fs = require('fs');
var async = require('async');

function Statichtml(){
	this.pushHtml = function(req, res, next){
		console.log(req.body);
		var files = [],
			filesName = req.body.file.split(','),
			staticRootPath = 'pc/static/';
		for(var i = 0, l = filesName.length; i < l; ++i){
			files.push({
				name:filesName[i],
				nunjucksContent: ''
			});
		}

		async.each(files,function(item, cb){

			item.nunjucksContent = nunjucks.render(staticRootPath+item.name);

			fs.open('./build/'+item.name,'w+', function(err, cb){
				if(err) throw err;

				fs.writeFile('./build/'+item.name, item.nunjucksContent, function (err) {
				  if (err) throw err;
				});
			});
			cb(null);

		},function(err){
			if(err){
				throw err;
			}
		});
	};
}

module.exports = statichtml;