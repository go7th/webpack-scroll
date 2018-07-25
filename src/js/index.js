var $ = require('jquery');
var css = require('../css/css.css');
var index = require('../index.html');

$.extend({
	out:function(el,classname){
		$(window).scroll(function () {
		var sTop = $(window).scrollTop();//滚动条y轴上的距离
		var oTop  = $(el).offset().top
		var h = $(window).height()
		if (oTop-sTop<h) {
			$(el).addClass(classname)
		}else{
			$(el).removeClass(classname)
		}
		})
	}
})
$.out('.scroll','show')