import { Component, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { Project } from 'src/app/model/project';
import { AutenticacionService } from 'src/app/service/autenticacion.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projectList:Project[] =[];
  showAddProject:boolean = false;
  subscription?:Subscription;

  constructor(private datosProject:ProyectoService, public authService: AutenticacionService) { }

  ngOnInit(): void {
    this.datosProject.obtenerDatos().subscribe(data=>{
      this.projectList = data;
    });
  }

  onclick() :void {
    this.showAddProject=!this.showAddProject;
  } 

  addProject(project:Project):void{
    this.datosProject.addProject(project).subscribe(project=>{this.projectList.push(project)});
    this.showAddProject=!this.showAddProject;
  }

  deleteProject(id:number):void {
    this.datosProject.deleteProject(id).subscribe(id=>{this.projectList=this.projectList.filter(project=>project.id !==id)})
  }

  editProject(project:Project):void {
    this.datosProject.editProject(project).subscribe(project=>{this.projectList[this.projectList.findIndex(s=>s.id==project.id)] = project})
  }

}
