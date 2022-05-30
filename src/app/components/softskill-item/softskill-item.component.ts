import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Skill } from 'src/app/model/skill';
import { AutenticacionService } from 'src/app/service/autenticacion.service';

@Component({
  selector: 'app-softskill-item',
  templateUrl: './softskill-item.component.html',
  styleUrls: ['./softskill-item.component.css']
})
export class SoftskillItemComponent implements OnInit {
  form: FormGroup;

  @Input() softskill:Skill = new Skill('',0,'');
  @Output() onEditSoftskill: EventEmitter<Skill> = new EventEmitter();
  @Output() onDeleteSoftskill: EventEmitter<number> = new EventEmitter();

  showEditSoftskill: boolean = false;


  constructor(public authService: AutenticacionService, private formBuilder:FormBuilder) {
    this.form = formBuilder.group({
      nombre:["",[Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
      porcentaje:[,[Validators.required, Validators.min(0), Validators.max(100)]],
      urlImagen:["",[Validators.required, Validators.minLength(1), Validators.maxLength(150)]]
    })
  }

  ngOnInit(): void {
    this.form.controls["nombre"].setValue(this.softskill.nombre);
    this.form.controls["porcentaje"].setValue(this.softskill.porcentaje);
    this.form.controls["urlImagen"].setValue(this.softskill.urlImagen);
  }

  onDeleteClick(): void{
    this.onDeleteSoftskill.emit(this.softskill.id);
  }

  onEditToggle(): void{
    this.showEditSoftskill = !this.showEditSoftskill;
    
  }

  onEditSave(): void {
    this.softskill.nombre= this.form.value["nombre"];
    this.softskill.porcentaje= this.form.value["porcentaje"];
    this.softskill.urlImagen= this.form.value["urlImagen"];
    this.onEditSoftskill.emit(this.softskill);
    this.showEditSoftskill=!this.showEditSoftskill;
  }


}
