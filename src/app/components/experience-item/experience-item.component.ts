import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experience } from 'src/app/model/experience';
import { AutenticacionService } from 'src/app/service/autenticacion.service';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.css']
})
export class ExperienceItemComponent implements OnInit {
  form: FormGroup;
  fecha:Date = new Date();
  currentDate:String = this.fecha.getFullYear()+"-"+(this.fecha.getMonth()+1)+"-"+this.fecha.getDate();

  @Input() experience:Experience = new Experience('',this.fecha,this.fecha,'','');
  @Output() onEditExperience: EventEmitter<Experience> = new EventEmitter();
  @Output() onDeleteExperience: EventEmitter<number> = new EventEmitter();

  showEditExperience: boolean = false;

  current:boolean = false;

  constructor(public authService: AutenticacionService,private formBuilder:FormBuilder) {
    this.form = formBuilder.group({
      nombre:['',[Validators.required, Validators.minLength(1), Validators.maxLength(60)]],
      fechaInicio:[,[Validators.required,Validators.min(1960), Validators.max(this.fecha.getFullYear())]],
      fechaFin:[,[Validators.required,Validators.min(1960) ,Validators.max(2050)]],
      descripcion:['',[Validators.required, Validators.minLength(1), Validators.maxLength(250)]],
      urlImagen:['',[Validators.required, Validators.minLength(1), Validators.maxLength(150)]],
    })
  }

  ngOnInit(): void {
    this.form.controls["nombre"].setValue(this.experience.nombre);
    this.form.controls["fechaInicio"].setValue(this.experience.fechaInicio);
    this.form.controls["fechaFin"].setValue(this.experience.fechaFin);
    this.form.controls["descripcion"].setValue(this.experience.descripcion);
    this.form.controls["urlImagen"].setValue(this.experience.urlImagen);

    this.current=this.experience.fechaFin.toString().replace("-0","-")>this.currentDate;

  }

  onDeleteClick(): void{
    this.onDeleteExperience.emit(this.experience.id);
  }

  onEditToggle(): void{
    this.showEditExperience = !this.showEditExperience;
    
  }

  onEditSave(): void {
    if (this.form.value["fechaInicio"]>this.form.value["fechaFin"]) {
      alert("La fecha de finalización debe ser posterior a la de inicio");
    }
    else {
      if(this.form.value["fechaInicio"].toString().replace("-0","-")>  this.currentDate) {
        alert("La fecha de inicio debe ser anterior a la fecha actual");
      }
      else {
        this.experience.nombre= this.form.value["nombre"];
        this.experience.fechaInicio= this.form.value["fechaInicio"];
        this.experience.fechaFin= this.form.value["fechaFin"];
        this.experience.descripcion= this.form.value["descripcion"];
        this.experience.urlImagen= this.form.value["urlImagen"];
        this.onEditExperience.emit(this.experience);
        this.showEditExperience=!this.showEditExperience;
      }
    }
  }


  

}

