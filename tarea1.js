/* 
Hola Alvaro, hice distintos ejercicios para practicar lo visto. Creo que pude resolver la votación, espero que este bien.Muchas gracias 

*/

for(let i = 0 ; i < 4; i++ ){
    let sabor = prompt("Ingrese 4 gustos de helado");
    console.log ("Los sabores que elegiste son: " , sabor); 

}






for(let i = 0 ; i < 5 ; i++){
    let numero = parseInt(prompt("Ingresa un numero, se va a sumar con 3"));
    console.log("ingresaste: " , numero);
    console.log("si al numero que ingresaste le sumas 5 el resultado es: " , numero + 3);
}






for(let i = 0 ; i < 6 ; i++){
    let numero_uno = parseInt(prompt("Ingresa un numero, no se puede utilizar el 10"));
    let numero_dos = parseInt(prompt("Ingresa un numero, no se puede utilizar el 10"));


    if(numero_uno == 10 || numero_dos ==10){
        console.log("No se puede ulizar el numero 10")
      break
    }

    console.log("ingresaste: " , numero_uno + numero_dos)
}






for(let i = 0 ; i < 6 ; i++){
    let numero_uno = parseInt(prompt("Ingresa un numero, no se puede utilizar el 10"));
    let numero_dos = parseInt(prompt("Ingresa un numero, no se puede utilizar el 10"));


    if(numero_uno == 10 || numero_dos ==10){
        console.log("No se puede ulizar el numero 10")
      continue
    }

    console.log("ingresaste: " , numero_uno + numero_dos)
}





let gustos = "";
while (gustos != "SALIR"){
    gusto = prompt("Ingrese el gusto o SALIR para finalizar");

    console.log("Elegiste: " , gustos);
    
}





let voto = "";
let cont_voto_descuento = 0;
let cont_voto_dos = 0;

while (voto != "SALIR"){
    voto = prompt("¿Que prefieren un descuento o 2x1?");
    if(voto == "descuento"){
        console.log("descuento");
        cont_voto_descuento++
    }
    else if(voto == "2x1"){
    console.log("2x1");
    cont_voto_dos++;
}
}

if(cont_voto_descuento > cont_voto_dos){
    alert("REALIZAMOS UN DESCUENTO");
}
else if (cont_voto_dos > cont_voto_descuento){
    alert("REALIZAMOS UN 2X1");
}
else{
    alert("EMPATE");
}



let gusto; 
do{
    gusto = prompt("Ingrese el gusto");
    console.log("Eligio" , gusto)
}

while(gusto != "SALIR")