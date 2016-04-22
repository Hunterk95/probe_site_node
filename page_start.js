var querystring = require("querystring"),
	fs = require("fs"),
	formidable = require("formidable");

function start(response)
{
  console.log("Request handler 'start' was called.");

  var body = '<html>'+
	'<head>'+
	'<meta http-equiv="Content-Type" '+
	'content="text/html; charset=UTF-8" />'+
	'</head>'+
	'<body>'+
	'<form action="/upload" enctype="multipart/form-data" '+
	'method="post">'+
	'<input type="file" name="upload" multiple="multiple">'+
	'<input type="submit" value="Загрузить файл" />'+
	'</form>'+
  '<form action="/founded_easy" method="post">'+
  '<textarea name="text" rows="1" cols="60"></textarea>'+
	'<input type="submit" value="Разложить на простые" />'+
	'</form>'+
	'</body>'+
	'</html>';

	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(body);
	response.end();
}

exports.show = start;
