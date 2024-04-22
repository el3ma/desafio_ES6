import Cliente from "./Clases/Cliente.js";
import Impuesto from "./Clases/Impuesto.js";


let impuesto1 = new Impuesto(2_000_000, 150_000);
console.log(impuesto1._montoBrutoAnual);

let cliente1 = new Cliente("Iván", impuesto1);
console.log(cliente1._impuesto._montoBrutoAnual)
console.log(cliente1.calcularImpuesto())
