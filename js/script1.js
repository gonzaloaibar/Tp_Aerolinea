
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

const form1= document.getElementById("formulario");

if(form1){

    form1.addEventListener("submit", function(event){
        const fechaIngresada = document.getElementById("fecha").value;
        const fechaValida = confirmar_fecha_vuelo(fechaIngresada);

        if(!fechaValida){
            event.preventDefault();
        }
    });

}


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

const form2= document.getElementById("formulario2");

if(form2){
    form2.addEventListener("submit", function(event){
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

        //referencia a la tabla y su cuerpo
        const tabla=document.getElementById("tabla").getElementsByTagName("tbody")[0];

        //creo la fila
        const fila=document.createElement('tr');
        fila.innerHTML=`
            <td>${nombre}</td>
            <td>${dni}</td>
            <td>${sexo}</td>
            <td>${origen}</td>
            <td>${destino}</td>
            <td>${fecha_vuelo}</td>
            <td>${clase}</td>
            <td>${ubicacion}</td>
        `;

        tabla.appendChild(fila);

        document.getElementById("formulario2").reset();
    
    });
}

