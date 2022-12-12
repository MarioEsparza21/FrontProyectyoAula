import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Materia, MateriaGrupo } from '../platform/materia/interfaces/materia.interface';

@Injectable({
  providedIn: 'root'
})
export class MateriasService {

  private baseUrl = environment.authUrl + '/api';
  private token = localStorage.getItem('token') || '';

  constructor(private http: HttpClient) { }

  postAgregarMateria(materia: Materia):Observable<Materia>{
    const url = `${this.baseUrl}/materias`
    const headers = new HttpHeaders().set('x-token', this.token);
    const body = {materia}
    
    return this.http
      .post<Materia>(url, body, { headers })
      .pipe(catchError((err) => of(err.error.message)));
  
  }

  postAgregarGrupoMateria(materiaGrupo: MateriaGrupo): Observable<MateriaGrupo>{
    const url = `${this.baseUrl}/materias/grupo`
    const headers = new HttpHeaders().set('x-token', this.token);
    const body = { materiaGrupo }

    return this.http
      .post<MateriaGrupo>(url, body, { headers })
      .pipe(catchError((err) => of(err.error.message)));
  }

  getMaterias(): Observable<Materia[]>{
    const url = `${this.baseUrl}/materias`;
    const headers = new HttpHeaders().set('x-token', this.token);

    return this.http
      .get<Materia>(url, { headers })
      .pipe(catchError((err) => of(err.error.message)));
  }

  getMateriasAlumno(codigoMateria: any, grupo: any):Observable<MateriaGrupo[]>{
    const url = `${this.baseUrl}/materias/${codigoMateria}/${grupo}`
    const headers = new HttpHeaders().set('x-token', this.token);

    return this.http
      .get<Materia>(url, { headers })
      .pipe(catchError((err) => of(err.error.message)));
  }
}

