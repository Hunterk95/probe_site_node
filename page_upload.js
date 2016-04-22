var querystring = require("querystring"),
	fs = require("fs"),
	formidable = require("formidable");

  function upload(response, request)
  {
    console.log("Request handler 'upload' was called.");

    var form = new formidable.IncomingForm();
    console.log("about to parse");
    form.parse(request, function(error, fields, files)
    {
    	console.log("parsing done");

    /* Возможна ошибка в Windows: попытка переименования уже существующего файла */
    	fs.rename(files.upload.path, "/tmp/test.png", function(err)
      {
    	  if (err) {
    		fs.unlink("/tmp/test.png");
    		fs.rename(files.upload.path, "/tmp/test.png");
    	  }
    	});
    	response.writeHead(200, {"Content-Type": "text/html"});
    	response.write("received image:<br/>");
    	response.write("<img src='/show' />");
    	response.end();
    });
  }

  exports.show = upload;
