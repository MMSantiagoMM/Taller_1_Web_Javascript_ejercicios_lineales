function send () {
    let Worker = document.getElementById("worker").value;
    let Salary = document.getElementById("salary").value;
    let Text = document.getElementById("text");
    let Salbruto = Salary - (Salary * 0.18);
    Text.textContent = "El nombre del trabajador es " + Worker + " y su salario con descuentos es de: " + Salbruto;  

}