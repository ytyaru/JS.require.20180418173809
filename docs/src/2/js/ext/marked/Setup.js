define(function(require, exports, module) {
    var Setup = {};
    Setup.Setup = function() {
	var marked = require('marked');
	var renderer = new marked.Renderer();
	Setup._SetupRenderer(renderer);
	marked.setOptions({
	    renderer: renderer,
	});
    }
    Setup._SetupRenderer = function(renderer) {
	//var code = require('js/ext/marked/Code');
	//code.Setup();
	var exts = [require('js/ext/marked/renderer/Code')];
	for (var i=0; i<exts.length; i++) {
	    exts[i].Setup(renderer);
	}
    }
    return Setup;
});
