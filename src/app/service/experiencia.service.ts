import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../model/experience';

const httpOptions = {
  headers:new HttpHeaders({
    'Content-Type': 'application/json',
    
    'Authorization': 'Bearer ' +JSON.stringify(sessionStorage.getItem('auth_token'))
  })
}

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  url:String = 'https://ct-portfolioweb-back.herokuapp.com'

  constructor(private http: HttpClient) { }

  public obtenerDatos():Observable<any> {
    return this.http.get(this.url+'/api/ver/experiencias');
  }

  addExperience(newExperience: Experience): Observable<Experience> {
    return this.http.post<Experience>(this.url+'/api/new/experiencia',newExperience,httpOptions);
  }

  deleteExperience(id: number): Observable<number> {
    return this.http.delete<number>(this.url+'/api/delete/experiencia/'+id,httpOptions);
  }

  editExperience(experience: Experience): Observable<Experience> {
    return this.http.put<Experience>(this.url+'/api/editar/experiencia',experience,httpOptions);
  }

}