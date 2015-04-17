var homeData = new HomeData();
var jf = require('jsonfile');
var fs = require('fs');
var util = require('util');
function HomeData(){
	this.getAll = function(cb){
		// get json
		var file = 'data/home.json';
		jf.readFile(file, function(err, obj) {
			if(err){
				console.log(err.message);
			}else{
				cb(null, obj);
			}
		});
		// get real data
	};
}
module.exports = homeData;