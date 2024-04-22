class Cliente{
    constructor(nombre, impuesto){
        this._nombre = nombre;
        this._impuesto = impuesto;
    };

    calcularImpuesto(){
        let impuesto = ((this._impuesto._montoBrutoAnual - this._impuesto._deducciones) * 0.21);
        return impuesto
    }

    get nombre(){
        return this._nombre
    }

    set nombre(nuevoNombre){
        this._nombre = nuevoNombre;
    }

    get impuesto(){
        return this._impuesto
    }

    set impuesto(nuevoImpuesto){
        this._impuesto = nuevoImpuesto;
    }


}

export default Cliente;