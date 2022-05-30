import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Project } from 'src/app/model/project';

@Component({
  selector: 'app-projects-add',
  templateUrl: './projects-add.component.html',
  styleUrls: ['./projects-add.component.css']
})
export class ProjectsAddComponent implements OnInit {
  form: FormGroup;
  @Output() onAddProject: EventEmitter<Project> = new EventEmitter();
  newProject : Project = new Project("","","","")

  constructor(private formBuilder:FormBuilder) { 
    this.form = formBuilder.group({
      nombre:['',[Validators.required, Validators.minLength(1), Validators.maxLength(60)]],
      descripcion:['',[Validators.required, Validators.minLength(1), Validators.maxLength(250)]],
      urlImagen:['',[Validators.required, Validators.minLength(1), Validators.maxLength(150)]],
      urlProyecto:['',[Validators.required, Validators.minLength(1), Validators.maxLength(150)]]
    })
  }

  ngOnInit(): void {
  }

  onEnviar() {
    this.newProject.nombre= this.form.value["nombre"];
    this.newProject.descripcion= this.form.value["descripcion"];
    this.newProject.urlImagen= this.form.value["urlImagen"];
    this.newProject.urlProyecto= this.form.value["urlProyecto"];
    this.onAddProject.emit(this.newProject);
  }

} 
