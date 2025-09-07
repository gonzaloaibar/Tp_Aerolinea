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


