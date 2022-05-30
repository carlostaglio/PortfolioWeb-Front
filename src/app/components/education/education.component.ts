import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Education } from 'src/app/model/education';
import { AutenticacionService } from 'src/app/service/autenticacion.service';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educationList:Education[] = [];

  showAddEducation:boolean = false;
  subscription?:Subscription;

  constructor(private datosEducation:EducacionService, public authService: AutenticacionService) { }

  ngOnInit(): void {
    this.datosEducation.obtenerDatos().subscribe(data=>{
      this.educationList = data;
    });
  }

  onclick() :void {
    this.showAddEducation= !this.showAddEducation;
  }

  addEducation(education:Education):void{
    this.datosEducation.addEducation(education).subscribe(education=>{this.educationList.push(education)});
    this.showAddEducation=!this.showAddEducation;
  }

  deleteEducation(id:number):void {
    this.datosEducation.deleteEducation(id).subscribe(id=>{this.educationList=this.educationList.filter(education=>education.id !==id)})
  }

  editEducation(education:Education):void {
    this.datosEducation.editEducation(education).subscribe(education=>{this.educationList[this.educationList.findIndex(s=>s.id==education.id)] = education})
  }


}
