var $ = require('jquery-browserify');
var haxx = require('./');

$(document).ready(function() {
  // Christ.
  setTimeout(function() {
    haxx($, top);
  }, 1000);
});
