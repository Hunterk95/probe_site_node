
function page_not_found(response)
{
  console.log("Request handler 'start' was called.");
  response.writeHead(404, {"Content-Type": "text/html"});
  response.write("404 Not found");
  response.end();
}

exports.show = page_not_found;
