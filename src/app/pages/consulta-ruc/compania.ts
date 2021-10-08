export class Compania {
    ruc: string;
    razon_social: string;
    estado: string;
    direccion: string;
    ubigeo: string;
    departamento: string;
    provincia: string;
    distrito: string;

    constructor(compania?: Compania) {
        this.ruc = compania && compania.ruc || '';
        this.razon_social = compania && compania.razon_social || '';
        this.estado = compania && compania.estado || '';
        this.direccion = compania && compania.direccion || '';
        this.ubigeo = compania && compania.ubigeo || '';
        this.departamento = compania && compania.departamento || '';
        this.provincia = compania && compania.provincia || '';
        this.distrito = compania && compania.distrito || '';
    }

}