require.config({
    //baseUrl: 'https://ytyaru.github.io/JS.requier.20180417161744/',
    paths: {
	'text': 'js/lib/require/text',
	'jquery': 'js/lib/jquery/jquery-3.3.1.min',
	'marked': 'js/lib/marked/marked.min',
	'highlight': 'js/lib/highlight/highlight.min'
	//'jquery': 'https://code.jquery.com/jquery-3.3.1.min',
	//'marked': 'https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.19/marked.min',
	//'highlight': 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min'
    }
});
requirejs(['js/app/main.js']);
