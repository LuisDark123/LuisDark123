var g_mercurio = 3.7;
	var g_venus = 8.87;
	var g_luna = 1.62;
	var g_tierra = 9.8;
	var g_marte = 3.7;
	var g_jupiter = 24.8;
	var g_saturno = 10.44;
	var g_urano = 8.7;
	var g_neptuno = 11.15;

    var usuario = prompt("¿Cuál es tu peso?");
    var planeta = parseInt(prompt("Elige tu planeta\n Mercurio es 1, Venus es 2."));
    var peso = parseFloat(usuario);
    var peso_final;
    var planeta_elegido;
    
    if(planeta == 1){
        peso_final = peso * g_mercurio / 9.8;
        planeta_elegido = ("mercurio");
    }
    else if (planeta == 2){
        peso_final = peso * g_venus / 9.8;
        planeta_elegido = ("venus");
    }
    else if (planeta == 3){
        peso_final = peso * g_luna / 9.8;
        planeta_elegido = ("luna");
    }
    else if (planeta == 4){
        peso_final = peso * g_marte / 9.8;
        planeta_elegido = ("marte");
    }
    else if (planeta == 5){
        peso_final = peso * g_jupiter / 9.8;
        planeta_elegido = ("jupiter");
    }
    else if (planeta == 6){
        peso_final = peso * g_saturno / 9.8;
        planeta_elegido = ("saturno");
    }
    else if (planeta == 7){
        peso_final = peso * g_urano / 9.8;
        planeta_elegido = ("urano");
    }
    else if (planeta == 8){
        peso_final = peso * g_neptuno / 9.8;
        planeta_elegido = ("neptuno");
    }
    else{
    	peso_final = 0;
    	planeta_elegido = ("ningun planeta");
    }
    peso_final = peso_final.toFixed(2);
    document.write("Tu peso en " + planeta_elegido + " es " + peso_final);