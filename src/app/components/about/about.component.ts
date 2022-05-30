import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/model/persona';
import { AutenticacionService } from 'src/app/service/autenticacion.service';
import { PersonaService } from 'src/app/service/persona.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  form: FormGroup;
  
  persona:Persona = new Persona('','','','','');
  showEditPersona:boolean = false;

  constructor(private datosPersona:PersonaService, public authService: AutenticacionService, private formBuilder:FormBuilder) {
    this.form = formBuilder.group({
      nombre:["",[Validators.required, Validators.minLength(1), Validators.maxLength(20)]],
      apellido:["",[Validators.required, Validators.minLength(1), Validators.maxLength(20)]],
      titulo:["",[Validators.required, Validators.minLength(1), Validators.maxLength(40)]],
      sobreMi:['',[Validators.required, Validators.minLength(1), Validators.maxLength(250)]],
      urlFoto:["",[Validators.required, Validators.minLength(1), Validators.maxLength(150)]]
    })
  }

  ngOnInit(): void {
    this.datosPersona.obtenerDatos().subscribe(data=>{
      this.persona = data[0];

      this.form.controls["nombre"].setValue(this.persona.nombre);
      this.form.controls["apellido"].setValue(this.persona.apellido);
      this.form.controls["titulo"].setValue(this.persona.titulo);
      this.form.controls["sobreMi"].setValue(this.persona.sobreMi);
      this.form.controls["urlFoto"].setValue(this.persona.urlFoto);
    });
  }

    

  onEditToggle(): void{
    this.showEditPersona = !this.showEditPersona;
  }

  onEditSave(): void {
    this.persona.nombre= this.form.value["nombre"];
    this.persona.apellido= this.form.value["apellido"];
    this.persona.titulo= this.form.value["titulo"];
    this.persona.sobreMi= this.form.value["sobreMi"];
    this.persona.urlFoto= this.form.value["urlFoto"];
    this.datosPersona.editPersona(this.persona).subscribe();
    this.showEditPersona=!this.showEditPersona;
  }

} 
