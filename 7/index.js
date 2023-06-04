/* Calcule el promedio de 3 notas de un alumno, el rango de cada nota es del 1 al 5 */

function send() {
    let Name = document.getElementById("name");
    let Not_1 = parseFloat(document.getElementById("not_1").value);
    let Not_2 = parseFloat(document.getElementById("not_2").value);
    let Not_3 = parseFloat(document.getElementById("not_3").value);
    let Texto = document.getElementById("texto");
    let Prom = (Not_1 + Not_2 + Not_3) / 3;
    if (Prom >= 4.5)
        Texto.textContent = "El estudiante optiene un 5 con un promedio de " + Prom.toFixed(2)
    else if (Prom >= 3.8)
        Texto.textContent = "El estudiante optiene un 4 con un promedio de " + Prom.toFixed(2);
    else if (Prom >= 3)
        Texto.textContent = "El estudiante optiene un 3 con un promedio de " + Prom.toFixed(2);
    else
        Texto.textContent = "El estudiante pierde la materia con un promedio de " + Prom.toFixed(2);
}



