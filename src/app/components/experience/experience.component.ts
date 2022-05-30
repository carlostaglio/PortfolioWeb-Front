import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Experience } from 'src/app/model/experience';
import { AutenticacionService } from 'src/app/service/autenticacion.service';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experienceList:Experience[]=[];

  showAddExperience:boolean = false;
  subscription?:Subscription;

  constructor(private datosExperience:ExperienciaService, public authService: AutenticacionService) { }

  ngOnInit(): void {
    this.datosExperience.obtenerDatos().subscribe(data=>{
      this.experienceList = data;
    });
  }

  onclick() :void {
    this.showAddExperience= !this.showAddExperience;
  }

  addExperience(experience:Experience):void{
    this.datosExperience.addExperience(experience).subscribe(experience=>{this.experienceList.push(experience)});
    this.showAddExperience=!this.showAddExperience;
  }

  deleteExperience(id:number):void {
    this.datosExperience.deleteExperience(id).subscribe(id=>{this.experienceList=this.experienceList.filter(experience=>experience.id !==id)})
  }

  editExperience(experience:Experience):void {
    this.datosExperience.editExperience(experience).subscribe(experience=>{this.experienceList[this.experienceList.findIndex(s=>s.id==experience.id)] = experience})
  }

  
} 