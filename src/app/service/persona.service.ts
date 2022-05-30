import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';

const httpOptions = {
  headers:new HttpHeaders({
    'Content-Type': 'application/json', 
    
    'Authorization': 'Bearer ' +JSON.stringify(sessionStorage.getItem('auth_token'))
  })
}

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url:String = 'https://ct-portfolioweb-back.herokuapp.com'

  constructor(private http: HttpClient) { }

  public obtenerDatos():Observable<any> {
    return this.http.get(this.url+'/api/ver/personas');
  }

  editPersona(persona: Persona): Observable<Persona> {
    return this.http.put<Persona>(this.url+'/api/editar/persona',persona,httpOptions);
  }
}
