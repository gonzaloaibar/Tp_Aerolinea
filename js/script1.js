

//Validaciones a la pagina 1 (EJERCICIO 1 PT1, EJERCICIO 2 PT2)

//validar fecha
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

//validar origen y destino
function validar_destino(){
   
    const origen=document.getElementById("origen");
    const destino=document.getElementById("destino");
    const opciones_destino = destino.querySelectorAll("option");
    

    opciones_destino.forEach(opcion =>{
        if(opcion.value!="nada"){
            opcion.disabled=false;
        }
        
    });

    opciones_destino.forEach(opcion =>{
        if(opcion.value===origen.value){
            opcion.disabled=true;
        }
        
    });
    return true;


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

    //validar origen
    document.getElementById("origen").addEventListener("change", validar_destino);
    validar_destino();
    

}


//pagina2 (EJERCICIO 2 PT1, EJERCICIO 3 PT2)

function Reserva(destino, origen, fecha_vuelo, nombre_pasajero, dni, fec_nacimiento, clase, ubicacion,sexo){
    this.destino=destino;
    this.origen=origen;
    this.fecha_vuelo=fecha_vuelo;
    this.nombre_pasajero=nombre_pasajero;
    this.dni=dni;
    this.fec_nacimiento=fec_nacimiento;
    this.clase=clase;
    this.ubicacion=ubicacion;
    this.sexo=sexo;


}

class SistemaReserva{
    constructor(){
        this.reservas=[];
    }

    agregarReserva(reserva){
        this.reservas.push(reserva);
    }
}

//EJERCICIO 2 (agregar tres reservas de prueba)
function agregarPasajero(){
    let pasajero1=new Reserva("mendoza", "tucuman","04/11/2025","rafael", 45613221,"05/09/1990", "ejecutiva", "ventanilla","Masculino");
    let pasajero2=new Reserva("cordoba", "tucuman","04/11/2025","jorge", 43613221,"05/10/1990", "ejecutiva", "pasillo","Masculino");
    let pasajero3=new Reserva("tucuman", "mendoza","04/11/2025", "mariana", 47888991,"05/09/2000", "econimica", "centro","Masculino");

    const Sistema=new SistemaReserva();
    Sistema.agregarReserva(pasajero1);
    Sistema.agregarReserva(pasajero2);
    Sistema.agregarReserva(pasajero3);

    const tabla=document.getElementById("tabla").getElementsByTagName("tbody")[0];

    for(let i=0;i<Sistema.reservas.length;i++){
        let reser=Sistema.reservas[i];
        const fila=document.createElement('tr');
        fila.innerHTML=`
            <td>${reser.nombre_pasajero}</td>
            <td>${reser.dni}</td>
            <td>${reser.sexo}</td>
            <td>${reser.origen}</td>
            <td>${reser.destino}</td>
            <td>${reser.fecha_vuelo}</td>
            <td>${reser.clase}</td>
            <td>${reser.ubicacion}</td>
        `;
        tabla.appendChild(fila);
    }
}
agregarPasajero();


//para agregar reservas mediante el formulario
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

//Ejercicio 3

const clase=document.getElementById("clase");

clase.addEventListener("change", function(event){
    

});




