import Cliente from "./Clases/Cliente.js";
import Impuesto from "./Clases/Impuesto.js";


const formRegistro = document.getElementById("formRegistro");

formRegistro.addEventListener("submit", event => {
    event.preventDefault();

    let datos = new FormData(formRegistro);

    let nombre = datos.get("nombre");
    let montoBrutoAnual = datos.get("montoBrutoAnual");
    let deducciones = datos.get("deducciones");
    
    let impuesto1 = new Impuesto(montoBrutoAnual, deducciones);

    let cliente1 = new Cliente(nombre, impuesto1);

    console.log(cliente1);
    console.log(cliente1._impuesto._montoBrutoAnual)
    console.log(cliente1.calcularImpuesto())

    const lista = document.getElementById("datosCliente")
    let plantilla = `
        <p>Nombre : ${cliente1.nombre}</p>
        <p>Monto Bruto Anual: $${cliente1._impuesto._montoBrutoAnual}</p>
        <p>Deducciones: $${cliente1._impuesto._deducciones}</p>
        <p>Impuestos a pagar: $${cliente1.calcularImpuesto()}</p>
    `;

    lista.innerHTML = plantilla;

})



