import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experience } from 'src/app/model/experience';

@Component({
  selector: 'app-experience-add',
  templateUrl: './experience-add.component.html',
  styleUrls: ['./experience-add.component.css']
})
export class ExperienceAddComponent implements OnInit {
  form: FormGroup;
  @Output() onAddExperience: EventEmitter<Experience> = new EventEmitter();
  fecha:Date = new Date();
  currentDate:String = this.fecha.getFullYear()+"-"+(this.fecha.getMonth()+1)+"-"+this.fecha.getDate();
  newExperience : Experience = new Experience("",this.fecha,this.fecha,"","")


  constructor(private formBuilder:FormBuilder) { 
    this.form = formBuilder.group({
      nombre:['',[Validators.required, Validators.minLength(1), Validators.maxLength(60)]],
      fechaInicio:[,[Validators.required]],
      fechaFin:[,[Validators.required]],
      descripcion:['',[Validators.required, Validators.minLength(1), Validators.maxLength(250)]],
      urlImagen:['',[Validators.required, Validators.minLength(1), Validators.maxLength(150)]],
    })
  }

  ngOnInit(): void {
  }

  onEnviar() {
    if (this.form.value["fechaInicio"]>this.form.value["fechaFin"]) {
      alert("La fecha de finalización debe ser posterior a la de inicio");
    }
    else {
      if(this.form.value["fechaInicio"].toString().replace("-0","-")>  this.currentDate) {
        alert("La fecha de inicio debe ser anterior a la fecha actual");
      }
      else {
        this.newExperience.nombre= this.form.value["nombre"];
        this.newExperience.fechaInicio= this.form.value["fechaInicio"];
        this.newExperience.fechaFin= this.form.value["fechaFin"];
        this.newExperience.descripcion= this.form.value["descripcion"];
        this.newExperience.urlImagen= this.form.value["urlImagen"];
        this.onAddExperience.emit(this.newExperience);
      }
    }
  }

} 