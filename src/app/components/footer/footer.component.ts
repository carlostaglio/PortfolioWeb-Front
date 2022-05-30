import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Social } from 'src/app/model/social';
import { AutenticacionService } from 'src/app/service/autenticacion.service';
import { SocialService } from 'src/app/service/social.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  form: FormGroup;
  
  social:Social = new Social('','','');
  showEditSocial:boolean = false;
  isLoggedIn:boolean = false;

  constructor(private datosSocial:SocialService,public authService: AutenticacionService,private formBuilder:FormBuilder) {
    this.form = formBuilder.group({
      correo:["",[Validators.required, Validators.email, Validators.minLength(1), Validators.maxLength(50)]],
      github:["",[Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
      linkedin:["",[Validators.required, Validators.minLength(1), Validators.maxLength(100)]]
    })
  }

  ngOnInit(): void {
    this.datosSocial.obtenerDatos().subscribe(data=>{
      this.social = data[0];

      this.form.controls["correo"].setValue(this.social.correo);
      this.form.controls["github"].setValue(this.social.github);
      this.form.controls["linkedin"].setValue(this.social.linkedin);
    });
  }

    

  onEditToggle(): void{
    this.showEditSocial = !this.showEditSocial;
  }

  onEditSave(): void {
    this.social.correo= this.form.value["correo"];
    this.social.github= this.form.value["github"];
    this.social.linkedin= this.form.value["linkedin"];
    this.datosSocial.editSocial(this.social).subscribe();
    this.showEditSocial=!this.showEditSocial;
  }

}
