import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../model/project';

const httpOptions = {
  headers:new HttpHeaders({
    'Content-Type': 'application/json', 
    
    'Authorization': 'Bearer ' +JSON.stringify(sessionStorage.getItem('auth_token'))
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  url:String = 'https://ct-portfolioweb-back.herokuapp.com'

  constructor(private http: HttpClient) { }

  public obtenerDatos():Observable<any> {
    return this.http.get(this.url+'/api/ver/proyectos');
  }

  addProject(newProject: Project): Observable<Project> {
    return this.http.post<Project>(this.url+'/api/new/proyecto',newProject,httpOptions);
  }

  deleteProject(id: number): Observable<number> {
    return this.http.delete<number>(this.url+'/api/delete/proyecto/'+id,httpOptions);
  }

  editProject(project: Project): Observable<Project> {
    return this.http.put<Project>(this.url+'/api/editar/proyecto',project,httpOptions);
  }

}
