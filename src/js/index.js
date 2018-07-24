var $ = require('jquery');
var css = require('../css/css.css');
var index = require('../index.html');

var out = $(window).scroll(function () {
	var sTop = $(window).scrollTop();//滚动条y轴上的距离
	var oTop  = $('.scroll').offset().top
	var h = $(window).height()
	if (oTop-sTop<h) {
		$('.scroll').addClass('show')
	}else{
		$('.scroll').removeClass('show')
	}
})

module.exports = out;