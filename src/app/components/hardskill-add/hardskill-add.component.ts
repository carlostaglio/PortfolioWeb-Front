import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Skill } from 'src/app/model/skill';

@Component({
  selector: 'app-hardskill-add',
  templateUrl: './hardskill-add.component.html',
  styleUrls: ['./hardskill-add.component.css']
})
export class HardskillAddComponent implements OnInit {
  form: FormGroup;
  @Output() onAddHardskill: EventEmitter<Skill> = new EventEmitter();
  newHardskill : Skill = new Skill("",0,"")

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
    this.newHardskill.nombre= this.form.value["nombre"];
    this.newHardskill.porcentaje= this.form.value["porcentaje"];
    this.newHardskill.urlImagen= this.form.value["urlImagen"];
    this.onAddHardskill.emit(this.newHardskill);
  }

}