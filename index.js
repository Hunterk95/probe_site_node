var server = require("./server");
var router = require("./router");
var request_handlers = require("./request_handlers");

var handle = {}
handle["/"] = request_handlers.start;
handle["/start"] = request_handlers.start;
handle["/upload"] = request_handlers.upload;
handle["/show"] = request_handlers.show;

server.start(router.route, handle);
