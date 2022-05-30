import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill';

const httpOptions = {
  headers:new HttpHeaders({
    'Content-Type': 'application/json',
    
    'Authorization': 'Bearer ' +JSON.stringify(sessionStorage.getItem('auth_token'))
  })
}

@Injectable({
  providedIn: 'root'
})
export class HardskillService {
  url:String = 'https://ct-portfolioweb-back.herokuapp.com'

  constructor(private http: HttpClient) { }

  public obtenerDatos():Observable<any> {
    return this.http.get(this.url+'/api/ver/hardskills');
  }

  addHardskill(newHardskill: Skill): Observable<Skill> {
    return this.http.post<Skill>(this.url+'/api/new/hardskill',newHardskill,httpOptions);
  }

  deleteHardskill(id: number): Observable<number> {
    return this.http.delete<number>(this.url+'/api/delete/hardskill/'+id,httpOptions);
  }

  editHardskill(hardskill: Skill): Observable<Skill> {
    return this.http.put<Skill>(this.url+'/api/editar/hardskill',hardskill,httpOptions);
  }
}