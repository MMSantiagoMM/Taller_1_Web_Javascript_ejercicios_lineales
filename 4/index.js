function send() {
    let Worker = document.getElementById("worker").value;
    let Valhour = parseInt(document.getElementById("valhour").value);
    let Valhourx = parseInt(document.getElementById("valhourx").value);
    let Hours = parseInt(document.getElementById("hours").value);
    let Hourx = parseInt(document.getElementById("hourx").value);
    let Texto = document.getElementById("texto");
    let Salary_normal = Valhour * Hours
    if (!isNaN(Valhourx) && !isNaN(Hourx))
        Salary_normal += Valhourx * Hourx;
    Texto.textContent = "El salario del trabajdor " + Worker + " es de: " + Salary_normal;
}