var server = require("./server");
var router = require("./router");

var page_start = require("./page_start");
var page_upload = require("./page_upload");
var page_show = require("./page_show");
var page_not_found = require("./page_not_found");
var page_founded_easy = require("./page_founded_easy");

var handle = {}
handle["/"] = page_start.show;
handle["/start"] = page_start.show;
handle["/upload"] = page_upload.show;
handle["/show"] = page_show.show;
handle["/founded_easy"] = page_founded_easy.show;
handle["/page_not_found"] = page_not_found.show;


server.start(router.route, handle);
