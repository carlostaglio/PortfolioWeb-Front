import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill';

const httpOptions = {
  headers:new HttpHeaders({
    'Content-Type': 'application/json', 
    
    'Authorization': 'Bearer ' +sessionStorage.getItem('auth_token')
  })
}

@Injectable({
  providedIn: 'root'
})
export class SoftskillService {
  url:String = 'https://ct-portfolioweb-back.herokuapp.com'

  constructor(private http: HttpClient) { }

  public obtenerDatos():Observable<any> {
    return this.http.get(this.url+'/api/ver/softskills');
  }

  addSoftskill(newSoftskill: Skill): Observable<Skill> {
    return this.http.post<Skill>(this.url+'/api/new/softskill',newSoftskill,httpOptions);
  }

  deleteSoftskill(id: number): Observable<number> {
    return this.http.delete<number>(this.url+'/api/delete/softskill/'+id,httpOptions);
  }

  editSoftskill(softskill: Skill): Observable<Skill> {
    return this.http.put<Skill>(this.url+'/api/editar/softskill',softskill,httpOptions);
  }
}
