var querystring = require("querystring"),
	fs = require("fs"),
	formidable = require("formidable");

var where_stoped = 2;

  function founded_easy(response, request, postData)
  {
    console.log("Request handler 'founded_easy' was called.");

    var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" '+
    'content="text/html; charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/start" enctype="multipart/form-data" '+
    'method="post">'+
    '<input type="submit" value="Назад" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);

    console.log("postData is ", postData);
    console.log("parsed postData is ", querystring.parse(postData).text);
    postData = querystring.parse(postData).text;
    if (postData <= 999999999999999)
    {
      var num = find_easy(postData, where_stoped);
      var ansver = num;
      response.write(": " + ansver);

      while (num < postData)
      {
        postData = postData/num;
        num = find_easy(postData, where_stoped);
        var ansver = num;
        response.write(", " + ansver);
      }
    }
    else response.write(postData +" is too big for yet :(");

    response.end();
  }

  function find_easy(num, where_stoped)
  {
    console.log("find easy of ", num);
    if (where_stoped == 2)
    {
      if (num%2 == 0)
        return 2;
      else where_stoped = 3;
    }
    if (where_stoped == 3)
    {
      for (var i = where_stoped; i < num/2; i+=2)
      {
        if (num%i == 0)
        {
          where_stoped = i;
          return i;
        }
      }
    }
    return num;
  }

    exports.show = founded_easy;
    exports.find_easy = find_easy;
