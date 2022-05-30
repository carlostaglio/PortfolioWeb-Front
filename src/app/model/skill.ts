
export class Skill {
    id?: number;
    nombre:string;
    porcentaje:number;
    urlImagen:string;

    constructor(nombre:string, porcentaje:number, urlImagen:string) {
        this.nombre=nombre;
        this.porcentaje=porcentaje;
        this.urlImagen=urlImagen;
    }
}