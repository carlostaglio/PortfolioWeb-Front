import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Education } from 'src/app/model/education';

@Component({
  selector: 'app-education-add',
  templateUrl: './education-add.component.html',
  styleUrls: ['./education-add.component.css']
})
export class EducationAddComponent implements OnInit {
  form: FormGroup;
  @Output() onAddEducation: EventEmitter<Education> = new EventEmitter();
  newEducation : Education = new Education("",0,0,"","")
  fecha:Date = new Date();

  constructor(private formBuilder:FormBuilder) { 
    this.form = formBuilder.group({
      nombre:['',[Validators.required, Validators.minLength(1), Validators.maxLength(60)]],
      anioInicio:[,[Validators.required,Validators.min(1960), Validators.max(this.fecha.getFullYear())]],
      anioFin:[,[Validators.required,Validators.min(1960) ,Validators.max(2050)]],
      descripcion:['',[Validators.required, Validators.minLength(1), Validators.maxLength(250)]],
      urlImagen:['',[Validators.required, Validators.minLength(1), Validators.maxLength(150)]],
    })
  }

  ngOnInit(): void {
  }

  onEnviar() {
    if (this.form.value["anioInicio"]<=this.form.value["anioFin"]) {
      this.newEducation.nombre= this.form.value["nombre"];
      this.newEducation.anioInicio= this.form.value["anioInicio"];
      this.newEducation.anioFin= this.form.value["anioFin"];
      this.newEducation.descripcion= this.form.value["descripcion"];
      this.newEducation.urlImagen= this.form.value["urlImagen"];
      this.onAddEducation.emit(this.newEducation);
    }
    else {
      alert("El año de finalización debe ser mayor o igual al de inicio");
    }
  }

} 