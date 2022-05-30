import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Skill } from 'src/app/model/skill';
import { AutenticacionService } from 'src/app/service/autenticacion.service';

@Component({
  selector: 'app-hardskill-item',
  templateUrl: './hardskill-item.component.html',
  styleUrls: ['./hardskill-item.component.css']
})
export class HardskillItemComponent implements OnInit {
  form: FormGroup;

  @Input() hardskill:Skill = new Skill('',0,'');
  @Output() onEditHardskill: EventEmitter<Skill> = new EventEmitter();
  @Output() onDeleteHardskill: EventEmitter<number> = new EventEmitter();

  showEditHardskill: boolean = false;


  constructor(public authService: AutenticacionService, private formBuilder:FormBuilder) {
    this.form = formBuilder.group({
      nombre:["",[Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
      porcentaje:[,[Validators.required, Validators.min(0), Validators.max(100)]],
      urlImagen:["",[Validators.required, Validators.minLength(1), Validators.maxLength(150)]]
    })
  }

  ngOnInit(): void {
    this.form.controls["nombre"].setValue(this.hardskill.nombre);
    this.form.controls["porcentaje"].setValue(this.hardskill.porcentaje);
    this.form.controls["urlImagen"].setValue(this.hardskill.urlImagen);
  }

  onDeleteClick(): void{
    this.onDeleteHardskill.emit(this.hardskill.id);
  }

  onEditToggle(): void{
    this.showEditHardskill = !this.showEditHardskill;
    
  }

  onEditSave(): void {
    this.hardskill.nombre= this.form.value["nombre"];
    this.hardskill.porcentaje= this.form.value["porcentaje"];
    this.hardskill.urlImagen= this.form.value["urlImagen"];
    this.onEditHardskill.emit(this.hardskill);
    this.showEditHardskill=!this.showEditHardskill;
  }


}

