

export class Project {
    id?: number;
    nombre:String;
    descripcion:String;
    urlImagen:String;
    urlProyecto:String;

    constructor(nombre:String, descripcion:String, urlImagen:String, urlProyecto:String) {
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.urlImagen=urlImagen;
        this.urlProyecto=urlProyecto;
    }
}