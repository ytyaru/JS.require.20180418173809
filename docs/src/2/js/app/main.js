//require(['sub', 'text!../txt/default.txt'], function(sub, md) {
//    sub.print(md);
//});
define(function(require, exports, module) {
    var sub = require('js/app/sub');
    //var txt = require('text!txt/default.txt');
    var md = require('text!txt/default.md');
    var $ = require('jquery');
    var marked = require('marked');
    var CssLoader = require('js/util/CssLoader');
    CssLoader.Load('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/vs2015.min.css');
    CssLoader.Load('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/vs2015.min.css');
    var markedSetup = require('js/ext/marked/Setup');
    markedSetup.Setup();
    html = marked(md);
    $('body').html(html);
    //$('body').html('<p>jQuery</p>');
    sub.print(md);
});
