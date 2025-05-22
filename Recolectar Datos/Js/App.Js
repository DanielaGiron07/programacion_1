function agregarDatos(){
    //recolectar informacion
    let nombre =prompt("Ingresa tu nombre");
    let edad =prompt("Ingresa tu edad");
    //apuntar a la tabla creada atraves de un ID
    let tabla = document.getElementById('tablaPersonas');
    //crear una nueva fila (tr)
    let fila=""
        // asignar texto a las tablas
    fila+=`
    <tr><td>${nombre}</td><td>${edad}</td></tr>`;
    tabla.innerHTML+=fila;
}