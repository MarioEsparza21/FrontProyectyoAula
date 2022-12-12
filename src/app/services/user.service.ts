import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Docente } from '../platform/user/interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = environment.authUrl + '/api';
  private token = localStorage.getItem('token') || '';

  constructor(private http: HttpClient) { }

  postRegistroProfesor(docente: Docente):Observable<Docente>{
    const url = `${this.baseUrl}/auth/registroProfesor`
    const headers = new HttpHeaders().set('x-token', this.token);
    const body = docente;

    return this.http
      .post<Docente>(url, body, { headers })
      .pipe(catchError((err) => of(err.error.message)));

  }
}
