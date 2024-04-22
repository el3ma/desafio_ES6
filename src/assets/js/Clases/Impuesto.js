export default class Impuesto{
    constructor(montoBrutoAnual, deducciones){
        this._montoBrutoAnual = montoBrutoAnual;
        this._deducciones = deducciones;
    }

    get montroBrutoAnual(){
        return this._montroBrutoAnual
    }

    set montroBrutoAnual(montroBrutoAnual){
        this._montroBrutoAnual = montroBrutoAnual;
    }

    get deducciones(){
        return this._deducciones
    }

    set deducciones(deducciones){
        this._deducciones = deducciones;
    }
}