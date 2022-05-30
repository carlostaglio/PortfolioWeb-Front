import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { AutenticacionService } from 'src/app/service/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  
  email: string="";
  password: string="";

  constructor(private formBuilder:FormBuilder, private authentication:AutenticacionService,private router:Router) { 
    this.form = formBuilder.group({
      email:['',[Validators.required, Validators.minLength(1), Validators.maxLength(50), Validators.email]],
      password:["",[Validators.required, Validators.minLength(1), Validators.max(30)]],
    })
  }

  ngOnInit(): void {
  }

  onEnviar(event: Event): void {
    event.preventDefault();
    let usuario:Usuario;
    usuario={email:this.form.value["email"],password:this.form.value["password"]};
    this.authentication.login(usuario).subscribe(data=>{this.router.navigate(['/'])}
                                              , error => {alert("Credenciales incorrectas")});
  }

} 
