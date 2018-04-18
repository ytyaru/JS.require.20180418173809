define(function(require, exports, module) {
    var CssLoader = {};
    CssLoader.Has = function(url) {
	// なぜかquerySelector()だと属性の条件を付与すると取得できない(null)
	elm = document.querySelectorAll('link[href="'+url+'"]');
	if (0 < elm.length) { return true; }
	else { return false; }
    };
    CssLoader.Load = function(url) {
	if (CssLoader.Has(url)) { return; }
	var link = document.createElement("link");
	link.type = "text/css";
	link.rel = "stylesheet";
	link.href = url;
	document.getElementsByTagName("head")[0].appendChild(link);
    };
    return CssLoader;
});

