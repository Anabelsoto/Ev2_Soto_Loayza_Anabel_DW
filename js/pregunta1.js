// pregunta 1.1
function calcula() {
    var num=document.getElementById("numero").value;

  var mensajito="";
    
    if(num%2==0){
mensajito="el numero es par"
    }else{
        mensajito="el numero es impar "
    }
    document.getElementById("mensaje").innerHTML=mensajito;
    document.getElementById("mensaje").style.color="blue";
    document.getElementById("mensaje").style.fontSize="25px";
}
// fin de la pregunta 1.1

//inicio pregunta 1.2 
function bucle1(){
    var inicio=0
    while(inicio<10){
        var resto=inicio%2;
        if(resto==0){
            console.log(inicio);
        }
        inicio++;
    }
}
//finaliza pregunta 1.2 

//inicio pregunta 1.3 
function evaluar() {
    var anio_actual=2021;
    var n=document.getElementById("nombre").value;
    var an=document.getElementById("anio_nac").value;
    
    var edad=document.getElementById("edad_actual").value=parseFloat(anio_actual)-parseFloat(an);
    document.getElementById("edad_actual").value=edad;
    
    var mensajito="";
    if(edad>=18){
        mensajito=n+", Usted puede ingresar a la fiesta por ser mayor de edad"
    } else{
        mensajito=n+", no puedes ingresar ya que eres menor de edad"
        }
        document.getElementById("mensaje").innerHTML=mensajito;
    }
//finaliza pregunta 1.3