let totalCantidad = 0;

        function agregarTransaccion() {
            let producto = document.getElementById("producto").value;
            let cantidad = parseInt(document.getElementById("cantidad").value);
            let precio = parseFloat(document.getElementById("precio").value);
            let encargado = document.getElementById("encargado").value;
            let empleado = document.getElementById("empleado").value;
            let fecha = new Date().toLocaleString();
            let total = cantidad * precio;

            if (isNaN(cantidad) || cantidad <= 0 || isNaN(precio) || precio <= 0 || encargado === "" || empleado === "") {
                alert("Por favor, completa todos los campos correctamente.");
                return;
            }

            let tabla = document.getElementById("tabla-body");
            let fila = tabla.insertRow();
            fila.insertCell(0).textContent = producto;
            fila.insertCell(1).textContent = cantidad;
            fila.insertCell(2).textContent = precio.toFixed(2);
            fila.insertCell(3).textContent = total.toFixed(2);
            fila.insertCell(4).textContent = encargado;
            fila.insertCell(5).textContent = empleado;
            fila.insertCell(6).textContent = fecha;

            totalCantidad += cantidad;
            document.getElementById("totalCantidad").textContent = totalCantidad;

            document.getElementById("cantidad").value = "";
            document.getElementById("precio").value = "";
            document.getElementById("encargado").value = "";
            document.getElementById("empleado").value = "";
        }