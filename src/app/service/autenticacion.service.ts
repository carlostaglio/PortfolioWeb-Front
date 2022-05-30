import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  url:string = 'https://ct-portfolioweb-back.herokuapp.com/api/login'

  currentUserSubject: BehaviorSubject<any>;

  constructor(private http:HttpClient) {
    this.currentUserSubject= new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'));
  }

  login(usuario:Usuario): Observable<any>{
    return this.http.post<any>(this.url,usuario).pipe(map(data => {
      sessionStorage.setItem('auth_token',data.accessToken);
      return data;
    }
    ))
  }

  logout() {
    sessionStorage.removeItem('auth_token');
  }

  public loggedIn():boolean {
    return (sessionStorage.getItem('auth_token') !==null);
  }
}
