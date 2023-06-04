/* Calcule el porcentaje de alumnos y alumnas de un salón de clase, digitando el total de
alumnos hombres y mujeres. */
function send(){
    let Almno = parseInt(document.getElementById("almno").value);
    let Almna = parseInt(document.getElementById("almna").value);
    let Texto = document.getElementById("texto");
    let Total = Almno + Almna;
    let pormujer = Almna * 100 / Total;
    let porhombre = Almno * 100 / Total;
    Texto.innerHTML = "La cantidad total de estudiantes es de: " + Total + "<br> Las mujeres representan el " + pormujer.toFixed(2) + "%" + "<br> Los hombres representan el " + porhombre.toFixed(2) + "%" 
    
}