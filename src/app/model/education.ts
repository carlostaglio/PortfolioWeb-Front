
export class Education {
    id?: number;
    nombre:String;
    anioInicio:number;
    anioFin:number;
    descripcion:String;
    urlImagen:String;


    constructor(nombre:String, anioInicio:number, anioFin:number, descripcion:String, urlImagen:String) {
        this.nombre=nombre;
        this.anioInicio=anioInicio;
        this.anioFin=anioFin;
        this.descripcion=descripcion;
        this.urlImagen=urlImagen;
    }
}