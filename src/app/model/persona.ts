
export class Persona {
    id?: number;
    nombre:String;
    apellido:String;
    titulo:String;
    sobreMi:String;
    urlFoto:String;


    constructor(nombre:String, apellido:String, titulo:String, sobreMi:String, urlFoto:String) {
        this.nombre=nombre;
        this.apellido=apellido;
        this.titulo=titulo;
        this.sobreMi=sobreMi;
        this.urlFoto=urlFoto;
    }
}