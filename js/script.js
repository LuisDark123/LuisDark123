window.onload = function(){
	var loading = document.getElementById('preload')
loading.style.visibility = 'hidden';
loading.style.opacity = '0';
}

var $boton = document.getElementById("boton_menu");
var $menu = document.getElementById("menu_fullscreen");
$boton.addEventListener('click', function(){
	$menu.classList.toggle('active');
	$boton.classList.toggle('icon-minus');
});


var _smartsupp = _smartsupp || {};
_smartsupp.key = '488e7c4775dde4ab338188dc198f3d0cfefb7b49';
window.smartsupp||(function(d) {
  var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
  s=d.getElementsByTagName('script')[0];c=d.createElement('script');
  c.type='text/javascript';c.charset='utf-8';c.async=true;
  c.src='https://www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
})(document);