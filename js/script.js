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

// Lazy Loading
var bLazy = new Blazy({
    selector: 'img'
});