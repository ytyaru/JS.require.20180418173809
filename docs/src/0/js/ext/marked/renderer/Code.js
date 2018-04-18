define(function(require, exports, module) {
    return {
	Setup: function(renderer) {
	    var hljs = require('highlight');
	    renderer.code = function(code, language) {
		return '<pre'+'><code class="hljs">' + hljs.highlightAuto(code).value + '</code></pre>';
	    };
	}
    };
});
