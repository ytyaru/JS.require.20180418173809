define(function(require, exports, module) {
    var $ = require('jquery');
    var hljs = require('highlight');
    Code = {};
    Code.Setup = function(renderer) {
	// 言語別ハイライト用JS読込
	// https://stackoverflow.com/questions/17446844/dynamic-require-in-requirejs-getting-module-name-has-not-been-loaded-yet-for-c?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
	renderer.code = function(code, language) {
	    lang_name = Code._Split(language);
	    require(['js/lib/highlight/languages/'+Code._ReplaceLanguage(lang_name[0])+'.min'], function(hllangjs) {console.log('読込完了: highlight/languages/'+Code._ReplaceLanguage(lang_name[0])+'.min');});
	    return Code._MakePreCodeTag(lang_name[0], lang_name[1]);
	    /*
	    renderer.code の応答を非同期にすると戻り値なしとして`undefined`になってしまう。
	    languages/*.jsの動的ロードをするタイミングは別のときにすべき？
	    
	    try {
		require(['js/lib/highlight/languages/'+Code._ReplaceLanguage(lang_name[0])+'.min'], function(hllangjs) {
		    return Code._MakePreCodeTag(lang_name[0], lang_name[1]);
		    //return Code._MakeTag(lang_name[0], lang_name[1]);
		});
	    } catch (e) {
		console.log(e);
		return Code._MakePreCodeTag(lang_name[0], lang_name[1]);
	    }
	    */
	};
	/*
	try {
	    // 言語別ハイライト用JS読込
	    // https://stackoverflow.com/questions/17446844/dynamic-require-in-requirejs-getting-module-name-has-not-been-loaded-yet-for-c?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
	    require(['js/lib/highlight/languages/'+Code._ReplaceLanguage(lang)+'.min'], function(hllangjs) {
		renderer.code = function(code, language) {
		    lang_name = Code._Split(language);
		    return Code._MakePreCodeTag(lang_name[0], lang_name[1]);
		    //return Code._MakeTag(lang_name[0], lang_name[1]);
		}
	    });
	} catch (e) {
	    console.log(e);
	}
	*/
    };
    // ```lang:filename
    Code._Split = function(language) {
	var delimiter = ':';
	var info = language.split(delimiter);
	var lang = info.shift();
	var fileName = info.join(delimiter);
	return [lang, fileName];
	//return [Code._ReplaceLanguage(lang), fileName];
    };
    // ```sh とするが shell.min.js という名前である
    // ```html とするが xml.min.js しかない
    // * markdownの時点で存在するlanguagesファイルを意識すべき？
    // * markdownでは実在する拡張子にして存在するlanguagesファイル名に変換すべき？
    Code._ReplaceLanguage = function(lang) {
	if ('c' == lang || 'h' == lang || 'cc' == lang || 'hh' == lang || 'hpp' == lang || 'c++' == lang || 'h++' == lang) { return 'cpp'; }
	if ('html' == lang || 'svg' == lang) { return 'xml'; }
	else if ('js' == lang) { return 'javascript'; }
	else if ('md' == lang) { return 'markdown'; }
	else if ('sh' == lang) { return 'shell'; }
	else { return lang; }
    }
    // pre.code タグ作成
    Code._MakePreCodeTag = function(lang, filename) {
	console.log('lang:', lang, 'filename:', filename);
	return '<pre>' + Code._FileNameTag(filename)+ '<code class="'+lang+'">' + hljs.highlightAuto(code).value + '</code></pre>';
    }
    // ファイル名表示用タグ
    Code._FileNameTag = function(fileName) {
	if (fileName) { return '<code class="filename">'+fileName+'</code>'; }
	else { return ''; }
    };
    /*
    // 言語別ハイライト用JS読込
    Code._DynamicLoadHllangjs = function(lang) {
	// https://stackoverflow.com/questions/17446844/dynamic-require-in-requirejs-getting-module-name-has-not-been-loaded-yet-for-c?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
	var hllangjs = require('js/lib/highlight/languages/'+lang+'.min');
	//var hllangjs = require('js/lib/highlight/languages/'+language+'.js');
    };
    */
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
