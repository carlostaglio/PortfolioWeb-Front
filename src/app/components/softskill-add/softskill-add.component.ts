import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Skill } from 'src/app/model/skill';

@Component({
  selector: 'app-softskill-add',
  templateUrl: './softskill-add.component.html',
  styleUrls: ['./softskill-add.component.css']
})
export class SoftskillAddComponent implements OnInit {
  form: FormGroup;
  @Output() onAddSoftskill: EventEmitter<Skill> = new EventEmitter();
  newSoftskill : Skill = new Skill("",0,"")

  constructor(private formBuilder:FormBuilder) { 
    this.form = formBuilder.group({
      nombre:['',[Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
      porcentaje:[,[Validators.required, Validators.min(0), Validators.max(100)]],
      urlImagen:['',[Validators.required, Validators.minLength(1), Validators.maxLength(150)]]
    })
  }

  ngOnInit(): void {
  }

  onEnviar() {
    this.newSoftskill.nombre= this.form.value["nombre"];
    this.newSoftskill.porcentaje= this.form.value["porcentaje"];
    this.newSoftskill.urlImagen= this.form.value["urlImagen"];
    this.onAddSoftskill.emit(this.newSoftskill);
  }

} 
