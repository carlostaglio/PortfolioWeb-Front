import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Social } from '../model/social';


const httpOptions = {
  headers:new HttpHeaders({
    'Content-Type': 'application/json', 
    
    'Authorization': 'Bearer ' +JSON.stringify(sessionStorage.getItem('auth_token')) 
  })
}

@Injectable({
  providedIn: 'root'
})
export class SocialService {
  
  url:String = 'https://ct-portfolioweb-back.herokuapp.com'

  constructor(private http: HttpClient) { }

  public obtenerDatos():Observable<any> {
    return this.http.get(this.url+'/api/ver/socials');
  }

  editSocial(social: Social): Observable<Social> {
    return this.http.put<Social>(this.url+'/api/editar/social',social,httpOptions);
  }
}
