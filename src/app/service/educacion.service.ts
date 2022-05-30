import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../model/education';

const httpOptions = {
  headers:new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' +JSON.stringify(sessionStorage.getItem('auth_token')) 
  })
}

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  url:String = 'https://ct-portfolioweb-back.herokuapp.com'

  constructor(private http: HttpClient) { }

  public obtenerDatos():Observable<any> {
    return this.http.get(this.url+'/api/ver/educaciones');
  }

  addEducation(newEducation: Education): Observable<Education> {
    return this.http.post<Education>(this.url+'/api/new/educacion',newEducation,httpOptions);
  }

  deleteEducation(id: number): Observable<number> {
    return this.http.delete<number>(this.url+'/api/delete/educacion/'+id,httpOptions);
  }

  editEducation(education: Education): Observable<Education> {
    return this.http.put<Education>(this.url+'/api/editar/educacion',education,httpOptions);
  }

}