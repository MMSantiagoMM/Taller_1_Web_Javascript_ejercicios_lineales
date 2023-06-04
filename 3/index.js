let Texto = document.getElementById("texto");
function sum () {
    let Num_1 = parseInt(document.getElementById("num_1").value);
    let Num_2 = parseInt(document.getElementById("num_2").value);
    let Sum = Num_1 + Num_2;
    Texto.textContent = "El resultado de la suma es: " + Sum;
}
function res () {
    let Num_1 = parseInt(document.getElementById("num_1").value);
    let Num_2 = parseInt(document.getElementById("num_2").value);
    let Sum = Num_1 - Num_2;
    Texto.textContent = "El resultado de la resta es: " + Sum;
}
function mult () {
    let Num_1 = parseInt(document.getElementById("num_1").value);
    let Num_2 = parseInt(document.getElementById("num_2").value);
    let Sum = Num_1 * Num_2;
    Texto.textContent = "El resultado de la multiplicación es: " + Sum;
}
function div () {
    let Num_1 = parseInt(document.getElementById("num_1").value);
    let Num_2 = parseInt(document.getElementById("num_2").value);
    let Sum = Num_1 / Num_2;
    Texto.textContent = "El resultado de la división es: " + Sum;
}
function mod () {
    let Num_1 = parseInt(document.getElementById("num_1").value);
    let sw=0;
    let i = 2;
    while (i <= Num_1/2 && sw == 0)
        if(Num_1 % i == 0)
            sw=1;
        else
            i++;
        
        if(sw == 0)
        Texto.textContent = "El número " + Num_1 + " es primo"
        else
        Texto.textContent = "El número " + Num_1 + " no es primo"
}

