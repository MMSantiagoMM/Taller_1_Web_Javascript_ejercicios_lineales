/* Digita el ingreso del precio de un producto y se debe calcular el IVA, mostrar cuanto es el
IVA que se agrega, mostrar el precio del producto sin IVA y el total a pagar. */
function send() {
    let Name = document.getElementById("name").value;
    let Product = parseInt(document.getElementById("product").value);
    let Texto = document.getElementById("texto")
    let Iva = Product * 0.19;
    let ProductIva = Product + Iva;
    Texto.innerHTML = "El Impuesto al Valor Agregado es de 19% <br> para el producto " + Name + " es de : " + Iva + "<br> el precio del producto sin IVA es de " + Product + " <br> el total a pagar es con IVA es: " + ProductIva;
}