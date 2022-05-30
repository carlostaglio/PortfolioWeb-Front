
export class Experience {
    id?: number;
    nombre:String;
    fechaInicio:Date;
    fechaFin:Date;
    descripcion:String;
    urlImagen:String;


    constructor(nombre:String, fechaInicio:Date, fechaFin:Date, descripcion:String, urlImagen:String) {
        this.nombre=nombre;
        this.fechaInicio=fechaInicio;
        this.fechaFin=fechaFin;
        this.descripcion=descripcion;
        this.urlImagen=urlImagen;
    }
}