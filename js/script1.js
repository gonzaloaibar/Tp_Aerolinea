
//EJERCICIO 1

function confirmar_fecha_vuelo(fecha){
    const hoy=new Date();
    hoy.setHours(0,0,0,0);

    const fecha_vuelo= new Date(fecha);
    fecha_vuelo.setHours(0,0,0,0);
   

    if(hoy.getTime() < fecha_vuelo.getTime()){
        return true;
    }else{
        alert("fecha invalida (no puede ser menor a la fecha actual)");
        return false;
    }
    
}



document.getElementById("formulario").addEventListener("submit", function(event){
    const fechaIngresada = document.getElementById("fecha").value;
    const fechaValida = confirmar_fecha_vuelo(fechaIngresada);

    if(!fechaValida){
        event.preventDefault();
    }
})

//Ejercicio 2

function Reserva(destino, origen, fecha_hora, nombre_pasajero, dni, fec_nacimiento, clase, ubicacion){
    this.destino=destino;
    this.origen=origen;
    this.fecha_hora=fecha_hora;
    this.nombre_pasajero=nombre_pasajero;
    this.dni=dni;
    this.fec_nacimiento=fec_nacimiento;
    this.clase=clase;
    this.ubicacion=ubicacion;


}

class SistemaReserva{
    constructor(){
        this.reservas=[];
    }

    agregarReserva(reserva){
        this.reservas.push(reserva);
    }
}

document.getElementById("formulario2").addEventListener("submit", function(event){
    event.preventDefault();

    const nombre= document.getElementById("nombre").value;
    const dni= document.getElementById("dni").value;
    const sexo = document.querySelector('input[name="sexo"]:checked').value;
    const origen= document.getElementById("origen").value;
    const destino = document.getElementById("destino").value;
    const fecha_vuelo= document.getElementById("fecha_vuelo").value;
    const clase= document.getElementById("clase").value;
    const ubicacion= document.getElementById("ubicacion").value;

    console.log(nombre);

    
});