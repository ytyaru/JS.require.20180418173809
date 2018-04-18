define(function(require, exports, module) {
    Code = {};
    Code.Setup = function(renderer) {
	renderer.code = function(code, language) {
	    lang_name = Code._Split(language);
	    require(['js/lib/highlight/languages/'+lang_name[0]], function(hllangjs) {
		return '<pre>' + Code._FileNameTag(lang_name[1])+ '<code class="hljs">' + hljs.highlightAuto(code).value + '</code></pre>';
	    });
	    //Code._DynamicLoadHllangjs(lang_name[0]);
	    //return '<pre>' + Code._FileNameTag(lang_name[1])+ '<code class="hljs">' + hljs.highlightAuto(code).value + '</code></pre>';
	};
    };
    // ```lang:filename
    Code._Split = function(language) {
	var delimiter = ':';
	var info = language.split(delimiter);
	var lang = info.shift();
	var fileName = info.join(delimiter);
	return [lang, fileName];
    };
    // 言語別ハイライト用JS読込
    Code._DynamicLoadHllangjs = function(lang) {
	// https://stackoverflow.com/questions/17446844/dynamic-require-in-requirejs-getting-module-name-has-not-been-loaded-yet-for-c?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
	var hllangjs = require('js/lib/highlight/languages/'+lang+'.min');
	//var hllangjs = require('js/lib/highlight/languages/'+language+'.js');
    };
    // ファイル名表示用タグ
    Code._FileNameTag = function(fileName) {
	if (fileName) { return '<code class="filename">'+fileName+'</code>'; }
	else { return ''; }
    };
    return Code;
    /*
    return {
	Setup: function(renderer) {
	    var hljs = require('highlight');
	    renderer.code = function(code, language) {
		return '<pre'+'><code class="hljs">' + hljs.highlightAuto(code).value + '</code></pre>';
	    };

	}
    };
    */
});
