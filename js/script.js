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

var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/5afa4d8a5f7cdf4f053439b1/default';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
    })();