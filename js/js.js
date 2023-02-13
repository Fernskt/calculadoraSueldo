

function calcularSueldo() {
    const sueldoBasico = parseFloat(document.querySelector("#sueldoBasico").value);
    const diasTrabajados = parseFloat(document.querySelector("#diasTrabajados").value);
    const aniosTrabajados = parseFloat(document.querySelector("#aniosTrabajados").value);
    const cantidadHoras100 = parseFloat(document.querySelector("#cantidadHoras100").value);
    const tieneVacaciones = document.getElementById("flexCheckDefault").checked;
    const hora100 = sueldoBasico * 0.0104;

    const hora50 = 0;

    const dia = sueldoBasico / 24;
    const sueldoBasicoACobrar = (sueldoBasico / 30) * diasTrabajados
    const hora100dia = cantidadHoras100 * (hora100 * 1.12)
    const especialidad = sueldoBasicoACobrar * 0.12
    const promHs = 904.62
    const antiguedad = ((sueldoBasicoACobrar + hora100dia + especialidad + promHs) * 0.01) * aniosTrabajados;
    const viatico = dia * 0.368358;
    const comida = dia * 0.184843;
    const viaticoPorMes = viatico * diasTrabajados
    const comidaPorMes = comida * diasTrabajados
    const totalBruto = antiguedad + sueldoBasico + hora100dia + especialidad
    const deducciones = totalBruto * 0.21
    const totalNeto = (viatico * diasTrabajados + comida * diasTrabajados + totalBruto) - deducciones


    /* document.write(`Antiguedad: <b> $${antiguedad.toLocaleString()} </b>` + "<br>  <br>");
    document.write(`Valor del Día trabajado:  <b> $${dia.toLocaleString()}</b> ` + "<br>  <br>");
    document.write(`Valor de Hora extra al 100%: <b> $${hora100.toLocaleString()}</b>` + "<br>  <br>");
    document.write(`Valor de Hora extra al 50%: <b> ${hora50} </b>` + "<br>  <br>");
    document.write(`Viático por día: <b> $${viatico.toLocaleString()} </b>` + "<br>  <br>");
    document.write(`Comida por día: <b> $${comida.toLocaleString()} </b> ` + "<br>  <br>");
    document.write(`Viatico por mes: <b> $${viatico * diasTrabajados.toLocaleString()} </b> ` + "<br>  <br>");
    document.write(`Comida por mes: <b> $${comida * diasTrabajados.toLocaleString()}</b> ` + "<br>  <br>");
    document.write(`Sueldo Básico: <b> $${sueldoBasico.toLocaleString()} </b>` + "<br>  <br>");
    document.write(`especialidad: <b> $${especialidad.toLocaleString()} </b>` + "<br>  <br>")
    document.write(`Total a cobrar Neto: <b> $${(antiguedad + sueldoBasico + hora100dia + viatico * diasTrabajados + comida * diasTrabajados + especialidad).toLocaleString()} </b>`);
     */
     if (tieneVacaciones) {
        document.getElementById("tieneVacaciones").innerHTML = "...Y felicidades por tus vacaciones!";
     }

    if (sueldoBasico === "" || sueldoBasico === isNaN(sueldoBasico)) {
        alert("algunos campos incompletos")
        location.reload();
    } else {
        document.getElementById("antiguedad").innerHTML = antiguedad.toFixed(2);

        document.getElementById("dia").innerHTML = dia.toFixed(2);

        document.getElementById("sueldoBasicoACobrar").innerHTML = sueldoBasicoACobrar.toFixed(2);

        document.getElementById("hora100dia").innerHTML = hora100dia.toFixed(2);

        document.getElementById("viatico").innerHTML = viatico.toFixed(2);

        document.getElementById("comida").innerHTML = comida.toFixed(2);

        document.getElementById("especialidad").innerHTML = especialidad.toFixed(2);

        document.getElementById("totalBruto").innerHTML = totalBruto.toFixed(2);

        document.getElementById("totalNeto").innerHTML = totalNeto.toFixed(2);

        $("#staticBackdrop").modal("show");
    }

}
