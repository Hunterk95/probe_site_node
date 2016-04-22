function route(handle, pathname, response, request, postData)
{
  console.log("About to route a request for " + pathname);
  if (typeof handle[pathname] === 'function')
  {
    handle[pathname](response, request, postData);
  }
  else
  {
    console.log("No request handler found for " + pathname);
    handle["/page_not_found"](response, request);
  }
}

exports.route = route;
