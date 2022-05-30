import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Project } from 'src/app/model/project';
import { AutenticacionService } from 'src/app/service/autenticacion.service';

@Component({
  selector: 'app-projects-item',
  templateUrl: './projects-item.component.html',
  styleUrls: ['./projects-item.component.css']
})
export class ProjectsItemComponent implements OnInit {
  form: FormGroup;

  @Input() project:Project = new Project('','','','');
  @Output() onEditProject: EventEmitter<Project> = new EventEmitter();
  @Output() onDeleteProject: EventEmitter<number> = new EventEmitter();

  showEditProject: boolean = false;


  constructor(public authService: AutenticacionService, private formBuilder:FormBuilder) {
    this.form = formBuilder.group({
      nombre:["",[Validators.required, Validators.minLength(1), Validators.maxLength(60)]],
      descripcion:['',[Validators.required, Validators.minLength(1), Validators.maxLength(250)]],
      urlImagen:["",[Validators.required, Validators.minLength(1), Validators.maxLength(150)]],
      urlProyecto:["",[Validators.required, Validators.minLength(1), Validators.maxLength(150)]]
    })
  }

  ngOnInit(): void {
    this.form.controls["nombre"].setValue(this.project.nombre);
    this.form.controls["descripcion"].setValue(this.project.descripcion);
    this.form.controls["urlImagen"].setValue(this.project.urlImagen);
    this.form.controls["urlProyecto"].setValue(this.project.urlProyecto);
  }

  onDeleteClick(): void{
    this.onDeleteProject.emit(this.project.id);
  }

  onEditToggle(): void{
    this.showEditProject = !this.showEditProject;
    
  }

  onEditSave(): void {
    this.project.nombre= this.form.value["nombre"];
    this.project.descripcion= this.form.value["descripcion"];
    this.project.urlImagen= this.form.value["urlImagen"];
    this.project.urlProyecto= this.form.value["urlProyecto"];
    this.onEditProject.emit(this.project);
    this.showEditProject=!this.showEditProject;
  }


} 
