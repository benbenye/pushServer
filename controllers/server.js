var server = new Server();
// var nunjucks = require('nunjucks');
var swig = require('swig');
var fs = require('fs');

function Server(){
	this.post = function(req, res){

		var resJson = {
			"render": {
				"code": 1,
				// "templ":'../views/lists/item/product.html',
				"templ":'./views/lists/item/product.html',
				"staticName": 'product.html'
			},
			"data": {
				"name": req.body.name,
				"content": req.body.content,
				"lists": [
							{
						        "aHref": "/product/7547",
						        "imgSrc": "http://i1.chunboimg.com/group1/M00/01/0D/Cv4IdVUtxyOAWR_0AAHmYEip0lY785.jpg",
						        "imgAlt": "desx",
						        "pDesc": "描述",
						        "pTitle": "标题",
						        "pPrice": "￥123.00",
						        "pSize": "4只装"
							},
						    {
						        "aHref": "/product/7547",
						        "imgSrc": "http://i1.chunboimg.com/group1/M00/01/0D/Cv4IdVUtxyOAWR_0AAHmYEip0lY785.jpg",
						        "imgAlt": "desx",
						        "pDesc": "描述",
						        "pTitle": "标题",
						        "pPrice": "￥456.00",
						        "pSize": "4只装"
						    }
						]
			}
		};
		// var dd = nunjucks.render(resJson.render.templ,{
		// 		"data":resJson.datar
		// 	});

		// 作用域啊
		var locals = { mystuff: function mystuff() { return {"data": {
				"name": req.body.name,
				"content": req.body.content,
				"lists": [
							{
						        "aHref": "/product/7547",
						        "imgSrc": "http://i1.chunboimg.com/group1/M00/01/0D/Cv4IdVUtxyOAWR_0AAHmYEip0lY785.jpg",
						        "imgAlt": "desx",
						        "pDesc": "描述",
						        "pTitle": "标题",
						        "pPrice": "￥123.00",
						        "pSize": "4只装"
							},
						    {
						        "aHref": "/product/7547",
						        "imgSrc": "http://i1.chunboimg.com/group1/M00/01/0D/Cv4IdVUtxyOAWR_0AAHmYEip0lY785.jpg",
						        "imgAlt": "desx",
						        "pDesc": "描述",
						        "pTitle": "标题",
						        "pPrice": "￥456.00",
						        "pSize": "4只装"
						    }
						]
			}}; } };
		console.log('dd');
		swig.renderFile(resJson.render.templ,{locals:locals},function(err, up){
			if(err){
				throw err;
			}
			console.log(up);

			fs.open('./build/'+resJson.render.staticName,'w+', function(err, cb){
				if(err) throw err;
				fs.writeFile('./build/'+resJson.render.staticName, up, function (err) {
				  if (err) throw err;
				  console.log('It\'s saved!');
				});
			});
		});
		console.log('22');

		// fs.open('./build/'+resJson.render.staticName,'w+', function(err, cb){
		// 	if(err) throw err;
		// 	fs.writeFile('./build/'+resJson.render.staticName, dd, function (err) {
		// 	  if (err) throw err;
		// 	  console.log('It\'s saved!');
		// 	});
		// });

		//优先级

		res.json(resJson);

	};
}

module.exports = server;