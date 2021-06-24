function Lista_array(){
var lista=new Array();

var objeto1=new Object();
objeto1.nombre="caballo"
objeto1.cabeza="alargada",
objeto1.orejas="erguidas",
objeto1.raza="pura sangre",
objeto1.patas="largas"
objeto1.correr=function(){
    console.log(this.nombre+ ", está en el campo")
};
lista.push(objeto1);


var objeto2=new Object();
objeto2.nombre="zebra"
objeto2.cabeza="robuzta",
objeto2.color="rayas blanco y negro",
objeto2.patas="cuatro"
objeto2.habitad=function(){
    console.log(this.nombre+",se encuentran en las sabanas del sur y del este de África")
};
lista.push(objeto2);

var objeto3=new Object();
objeto3.nombre="Camello"
objeto3.pelaje="dorado",
objeto3.pestañas="largas",
objeto3.patas="largas y delgadas"
objeto3.reproduccion=function(){
    console.log(this.nombre+",Los camellos tienen una sola cría y el tiempo de gestación es de 11 meses.")
};
lista.push(objeto3);


var objeto4=new Object();
objeto4.nombre="Delfin"
objeto4.tamaño="1-9 metros",
objeto4.hocico="alargado",
objeto4.cabeza="larga"
objeto4.habitad=function(){
    console.log(this.nombre+",vive en todos los mares del mundo.")
};
lista.push(objeto4);

var objeto5=new Object();
objeto5.nombre="Burro"
objeto5.peso="250 kg aprox",
objeto5.orejas="largas",
objeto5.color="gris o marrón oscuro"
objeto5.alimentacion=function(){
    console.log(this.nombre+",son herbívoros")
};
lista.push(objeto5);

var objeto6=new Object();
objeto6.nombre="vaca"
objeto6.peso="750 kg aprox",
objeto6.orejas="ovaladas",
objeto6.ojos="grandes"
objeto6.alimentacion=function(){
    console.log(this.nombre+",son herbívoros")
};
lista.push(objeto6);

var objeto7=new Object();
objeto7.nombre="Canguro"
objeto7.patas="traseras largas y delanteras pequeñas",
objeto7.orejas="medianas y erguidas",
objeto7.cola="larga"
objeto7.reproduccion=function(){
    console.log(this.nombre+",nacen luego de un período de gestación de entre 28 y 36 días")
};
lista.push(objeto7);

var objeto8=new Object();
objeto8.nombre="gato"
objeto8.olfato="muy desarrollado",
objeto8.orejas="pequeñas y erguidas",
objeto8.cola="larga"
objeto8.reproduccion=function(){
    console.log(this.nombre+",La gestación dura 65 días")
};
lista.push(objeto8);

var objeto9=new Object();
objeto9.nombre="Leon"
objeto9.olfato="muy desarrollado",
objeto9.color="naranja amarillento",
objeto9.cola="larga"
objeto9.alimentacion=function(){
    console.log(this.nombre+", carnívoro");
};
lista.push(objeto9);

var objeto10=new Object();
objeto10.nombre="Jirafa"
objeto10.cuello="muy largo",
objeto10.color="naranja amarillento y marrón",
objeto10.cola="pequeña"
objeto10.alimentacion=function(){
    console.log(this.nombre+", herbívoro");
};
lista.push(objeto10);

var objeto11=new Object();
objeto11.nombre="llama"
objeto11.patas="largas",
objeto11.pelaje="grueso",
objeto11.peso="100 kg aprox"
objeto11.alimentacion=function(){
    console.log(this.nombre+", herbívoro");
};
lista.push(objeto11);

var objeto12=new Object();
objeto12.nombre="elefante"
objeto12.patas="pequeñas y gruesas",
objeto12.orejas="muy grandes",
objeto12.peso="7000 kg aprox"
objeto12.alimentacion=function(){
    console.log(this.nombre+", herbívoro");
};
lista.push(objeto12);

var objeto13=new Object();
objeto13.nombre="Zorro"
objeto13.patas="cortas",
objeto13.orejas="pequeñas y erguidas",
objeto13.pelaje="delgado"
objeto13.alimentacion=function(){
    console.log(this.nombre+", carnívoro");
};
lista.push(objeto13);

var objeto14=new Object();
objeto14.nombre="Liebre"
objeto14.patas="cortas",
objeto14.orejas="largas",
objeto14.pelaje="muy suave"
objeto14.alimentacion=function(){
    console.log(this.nombre+", herbívoro");
};
lista.push(objeto14);

var objeto15=new Object();
objeto15.nombre="murcielago"
objeto15.hocico="pequeño",
objeto15.orejas="medianas",
objeto15.color="entre, negro, marron, etc"
objeto15.habitad=function(){
    console.log(this.nombre+", viven en zonas calurosas");
};
lista.push(objeto15);

var objeto16=new Object();
objeto16.nombre="rinoceronte"
objeto16.hocico="tienen uno o dos cuernos ",
objeto16.patas="muy cortas",
objeto16.ojos="pequeños"
objeto16.habitad=function(){
    console.log(this.nombre+", viven en africa y asia");
};
lista.push(objeto16);

var objeto17=new Object();
objeto17.nombre="lobo"
objeto17.hocico="mediano ",
objeto17.patas="cortas",
objeto17.ojos="pequeños"
objeto17.habitad=function(){
    console.log(this.nombre+", Viven en América, Asia, Europa y África.");
};
lista.push(objeto17);

var objeto18=new Object();
objeto18.nombre="oso hormiguero"
objeto18.hocico="largo ",
objeto18.patas="cortas",
objeto18.ojos="pequeños"
objeto18.habitad=function(){
    console.log(this.nombre+", Viven en América del Sur");
};
lista.push(objeto18);

var objeto19=new Object();
objeto19.nombre="nutria"
objeto19.cuerpo="alargado y plano ",
objeto19.pelaje="muy fino y espeso",
objeto19.ojos="pequeños"
objeto19.habitad=function(){
    console.log(this.nombre+", son semiacuáticas");
};
lista.push(objeto19);

var objeto20=new Object();
objeto20.nombre="manatí"
objeto20.tamaño="3 -5 metros",
objeto20.peso="300 -600 kg",
objeto20.ojos="pequeños"
objeto20.habitad=function(){
    console.log(this.nombre+", viven en las aguas tropicale sy subtropicales");
};
lista.push(objeto20);




var result1=lista[0].nombre;
var result2=lista[1].color;
var result3=lista[2].nombre;
var result4=lista[3].nombre;
var result5=lista[4].nombre;
var result6=lista[5].nombre;
var result7=lista[6].nombre;
var result8=lista[7].nombre;
var result9=lista[8].nombre;
var result10=lista[9].nombre;
var result11=lista[10].nombre;
var result12=lista[11].nombre;
var result13=lista[12].nombre;
var result14=lista[13].nombre;
var result15=lista[14].nombre;
var result16=lista[15].nombre;
var result17=lista[16].nombre;
var result18=lista[17].nombre;
var result19=lista[18].nombre;
var result20=lista[19].nombre;

lista[0].correr();
lista[1].habitad();
lista[2].reproduccion();
lista[3].habitad();
lista[4].alimentacion();
lista[5].alimentacion();
lista[6].reproduccion();
lista[7].reproduccion();
lista[8].alimentacion();
lista[9].alimentacion();
lista[10].alimentacion();
lista[11].alimentacion();
lista[12].alimentacion();
lista[13].alimentacion();
lista[14].habitad();
lista[15].habitad();
lista[16].habitad();
lista[17].habitad();
lista[18].habitad();
lista[19].habitad();

//console.log(result1);
//console.log(result2);
//console.log(result3);
//console.log(result4);
//console.log(result5);
//console.log(result6);
//console.log(result7);
//console.log(result8);
//console.log(result9);
//console.log(result10);
//console.log(result11);
//console.log(result12);
//console.log(result13);
//console.log(result14);
//console.log(result15);
//console.log(result16);
//console.log(result17);
//console.log(result18);
//console.log(result19);
//console.log(result20);
}