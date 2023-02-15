function tieneVacas(){
const tieneVacaciones = document.getElementById("flexCheckDefault").checked;
if (tieneVacaciones) {
    console.log("Felices vacaciones!")
   document.getElementById("tieneVacaciones").innerHTML = "<div class='form-floating mt-2'><input type='number' class='form-control' id='diasTrabajados' placeholder='30'><label for='floatingInput'>Ingresá los días de vacaciones:</label></div>"
    
 }else{
    document.getElementById("tieneVacaciones").innerHTML = ""
 }
}

function calcularSueldo() {
    let sueldoBasico = 0/* = parseFloat(document.querySelector("#sueldoBasico").value); */
    const diasTrabajados = parseFloat(document.querySelector("#diasTrabajados").value);
    const aniosTrabajados = parseFloat(document.querySelector("#aniosTrabajados").value);
    const cantidadHoras100 = parseFloat(document.querySelector("#cantidadHoras100").value);
   /*  const tieneVacaciones = document.getElementById("flexCheckDefault").checked; */
    const auxiliar1 = document.getElementById("inlineRadio1").checked;
    const operador = document.getElementById("inlineRadio2").checked;
    const distribuidor = document.getElementById("inlineRadio3").checked;
    const adm1 = document.getElementById("inlineRadio4").checked;


    if (auxiliar1) {
        sueldoBasico = 124115.96;
    } else if (operador){
        sueldoBasico = 132466.90;
    } else if(distribuidor){
        sueldoBasico = 120570.50;
    } else if(adm1){
        sueldoBasico = 123888.35;
    } else {
        alert("Debes seleccionar tu categoría!")
        return;
    }



    console.log(sueldoBasico)

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


     


        document.getElementById("sueldoBasico").innerHTML = sueldoBasico.toFixed(2); 

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
