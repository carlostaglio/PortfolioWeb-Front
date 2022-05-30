import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Social } from 'src/app/model/social';
import { AutenticacionService } from 'src/app/service/autenticacion.service';
import { SocialService } from 'src/app/service/social.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  social:Social = new Social('','','');

  constructor(private datosSocial:SocialService, public authService: AutenticacionService, private router:Router) { }

  ngOnInit(): void {
    this.datosSocial.obtenerDatos().subscribe(data=>{
      this.social = data[0];})
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  
}
