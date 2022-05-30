import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { AutenticacionService } from 'src/app/service/autenticacion.service';
import { HardskillService } from 'src/app/service/hardskill.service';
import { SoftskillService } from 'src/app/service/softskill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  hardskillList:Skill[] = [];
  softskillList:Skill[] = [];
  showAddHardskill:boolean = false;
  showAddSoftskill:boolean = false;

  constructor(private datosHardskill:HardskillService, private datosSoftskill:SoftskillService, public authService: AutenticacionService) { }

  ngOnInit(): void {
    this.datosHardskill.obtenerDatos().subscribe(data=>{
      this.hardskillList = data;
    });

    this.datosSoftskill.obtenerDatos().subscribe(data=>{
      this.softskillList = data;
    });
  }

  onclickHardskill():void {
    this.showAddHardskill=!this.showAddHardskill;
  }

  addHardskill(hardskill:Skill):void{
    this.datosHardskill.addHardskill(hardskill).subscribe(hardskill=>{this.hardskillList.push(hardskill)});
    this.showAddHardskill=!this.showAddHardskill;
  }

  deleteHardskill(id:number):void {
    this.datosHardskill.deleteHardskill(id).subscribe(id=>{this.hardskillList=this.hardskillList.filter(hardskill=>hardskill.id !==id)})
  }

  editHardskill(hardskill:Skill):void {
    this.datosHardskill.editHardskill(hardskill).subscribe(hardskill=>{this.hardskillList[this.hardskillList.findIndex(h=>h.id==hardskill.id)] = hardskill})
  }

  onclickSoftskill():void {
    this.showAddSoftskill=!this.showAddSoftskill;
  }

  addSoftskill(softskill:Skill):void{
    this.datosSoftskill.addSoftskill(softskill).subscribe(softskill=>{this.softskillList.push(softskill)});
    this.showAddSoftskill=!this.showAddSoftskill;
  }

  deleteSoftskill(id:number):void {
    this.datosSoftskill.deleteSoftskill(id).subscribe(id=>{this.softskillList=this.softskillList.filter(softskill=>softskill.id !==id)})
  }

  editSoftskill(softskill:Skill):void {
    this.datosSoftskill.editSoftskill(softskill).subscribe(softskill=>{this.softskillList[this.softskillList.findIndex(s=>s.id==softskill.id)] = softskill})
  }
 
}
