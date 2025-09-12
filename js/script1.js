

//Validaciones a la pagina 1 (EJERCICIO 1 PT1, EJERCICIO 2 PT2)

function confirmar_fecha_vuelo(fecha){
    const hoy=new Date();
    hoy.setHours(0,0,0,0);

    const fecha_vuelo= new Date(fecha.value);
    fecha_vuelo.setHours(0,0,0,0);
   
    const mensaje=document.getElementById("error_fecha")

    if(hoy.getTime() < fecha_vuelo.getTime()){
        mensaje.textContent="";
        return true;
    }else{
        mensaje.textContent=" Fecha  de  Vuelo debe ser Mayor a la Fecha Actual";
        console.log("fecha invalida (no puede ser menor a la fecha actual)");
        return false;
    }
    
}

const form1= document.getElementById("formulario");

if(form1){
    //validar fecha
    form1.addEventListener("submit", function(event){

        const fechaIngresada = document.getElementById("fecha");
        const fechaValida = confirmar_fecha_vuelo(fechaIngresada);

        if(!fechaValida){
            event.preventDefault();
        }else{
            fechaIngresada.value="";
        }
        
    });

     //validar origen-destino
    const origen=document.getElementById("origen");
    const destino=document.getElementById("destino");
    const opciones_destino = destino.querySelectorAll("option");

    origen.addEventListener("change", function(event){
        opciones_destino.forEach(opcion =>{
            if(opcion.value!="nada"){
                opcion.disabled=false;
            }
            
        });

        opciones_destino.forEach(opcion =>{
           if(opcion.value===origen.value){
            opcion.disabled=true;
           }
           ;
        });
       console.log(origen.value);
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


//EJERCICIO 3
