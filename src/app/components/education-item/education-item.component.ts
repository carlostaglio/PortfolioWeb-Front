import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Education } from 'src/app/model/education';
import { AutenticacionService } from 'src/app/service/autenticacion.service';


@Component({
  selector: 'app-education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.css']
})
export class EducationItemComponent implements OnInit {
  form: FormGroup;

  @Input() education:Education = new Education('',0,0,'','');
  @Output() onEditEducation: EventEmitter<Education> = new EventEmitter();
  @Output() onDeleteEducation: EventEmitter<number> = new EventEmitter();

  showEditEducation: boolean = false;
  fecha:Date = new Date();
  current:boolean = false;


  constructor(public authService: AutenticacionService, private formBuilder:FormBuilder) {
    this.form = formBuilder.group({
      nombre:['',[Validators.required, Validators.minLength(1), Validators.maxLength(60)]],
      anioInicio:[,[Validators.required,Validators.min(1960), Validators.max(this.fecha.getFullYear())]],
      anioFin:[,[Validators.required,Validators.min(1960) ,Validators.max(2050)]],
      descripcion:['',[Validators.required, Validators.minLength(1), Validators.maxLength(250)]],
      urlImagen:['',[Validators.required, Validators.minLength(1), Validators.maxLength(150)]],
    })
  }

  ngOnInit(): void {
    this.form.controls["nombre"].setValue(this.education.nombre);
    this.form.controls["anioInicio"].setValue(this.education.anioInicio);
    this.form.controls["anioFin"].setValue(this.education.anioFin);
    this.form.controls["descripcion"].setValue(this.education.descripcion);
    this.form.controls["urlImagen"].setValue(this.education.urlImagen);

    this.current=this.fecha.getFullYear()<this.education.anioFin;
  }

  onDeleteClick(): void{
    this.onDeleteEducation.emit(this.education.id);
  }

  onEditToggle(): void{
    this.showEditEducation = !this.showEditEducation;
    
  }

  onEditSave(): void {
    if (this.form.value["anioInicio"]<=this.form.value["anioFin"]) {
      this.education.nombre= this.form.value["nombre"];
      this.education.anioInicio= this.form.value["anioInicio"];
      this.education.anioFin= this.form.value["anioFin"];
      this.education.descripcion= this.form.value["descripcion"];
      this.education.urlImagen= this.form.value["urlImagen"];
      this.onEditEducation.emit(this.education);
      this.showEditEducation=!this.showEditEducation;
    }
    else
    {
      alert("El año de finalización debe ser mayor o igual al de inicio");
    }
  }


}
