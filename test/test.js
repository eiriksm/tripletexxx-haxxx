var should = require('should');
var haxx = require('..');
//body = top.frames.content.document.getElementsByTagName('body');
var win = {
  document: {
    getElementsByTagName: function(name) {
      return [
        {name: name}
      ];
    }
  }
};
var jQuery = function(){
  this.find = function(sel) {
    return this;
  };
  this.on = function(sel, con, fn) {
    // For coverage.
    fn({keyCode: 9, preventDefault: function(){}});
    fn({keyCode: 8, preventDefault: function(){}});
    return this;
  };
  this.each = function(fn) {
    fn([]);
    return this;
  };
  this.closest = function(sel) {
    return this;
  };
  this.next = this.closest;
  this.focus = this.next;
  this.html = this.focus;
  this.replace = this.html;
  this.off = this.on;
  return this;
};

describe('Basic testing', function() {
  it('Should expose a function', function() {
    haxx.should.be.instanceOf(Function);
  });
  it('Should pass when we are mocking all parameters', function(done) {
    haxx(jQuery, win);
    // Wait a little.
    setTimeout(function() {
      done()
    }, 1500);
  });
});
