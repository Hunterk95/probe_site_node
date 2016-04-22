var querystring = require("querystring"),
	fs = require("fs"),
	formidable = require("formidable");

  function show(response)
  {
    console.log("Request handler 'show' was called.");
    fs.readFile("/tmp/test.png", "binary", function(error, file)
    {
    	if(error)
      {
    	  response.writeHead(500, {"Content-Type": "text/plain"});
    	  response.write(error + "\n");
    	  response.end();
    	}
      else
      {
    	  response.writeHead(200, {"Content-Type": "image/png"});
    	  response.write(file, "binary");
    	  response.end();
    	}
    });
  }

  exports.show = show;
