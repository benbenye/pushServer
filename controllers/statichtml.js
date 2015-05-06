var statichtml = new Statichtml();
var nunjucks = require('nunjucks');
var fs = require('fs');

function Statichtml(){
	this.pushHtml = function(req, res, next){
		console.log(req.body);
		var files = req.body.file.split(','),
			staticRootPath = 'pc/static/'
			dd = '';
			console.log(files);
		for (var i = 0, l = files.length; i < l; ++i) {
		
			dd = nunjucks.render(staticRootPath+files[i]);
			fs.open('./build/'+files[i]+'sa','w+', function(err, cb){
				console.log(i);
				if(err) throw err;
				fs.writeFile('./build/'+files[i]+'sa', dd, function (err) {
				console.log(i);
				  if (err) throw err;
				  console.log('It\'s saved!');
				});
			});

		};
	};
}

module.exports = statichtml;