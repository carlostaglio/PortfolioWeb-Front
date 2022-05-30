export class Social {
    id?: number;
    correo:String;
    github:String;
    linkedin:String;

    constructor(correo:String, github:String, linkedin:String) {
        this.correo=correo;
        this.github=github;
        this.linkedin=linkedin;
    }
}