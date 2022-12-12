import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyecto } from '../platform/proyectos/interface/proyecto.interface';
import { Materia } from '../platform/materia/interfaces/materia.interface';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  private baseUrl = environment.authUrl + '/api';
  private token = localStorage.getItem('token') || '';

  constructor(private http: HttpClient) { }

  postAgregarProyecto(proyecto: Proyecto,cod_asignatura:Materia,nombreGrupo:Materia):Observable<Proyecto>{
    const url = `${this.baseUrl}/materias/proyectos/${cod_asignatura}/${nombreGrupo}`
    const headers = new HttpHeaders().set('x-token', this.token);
    const body = proyecto;

    return this.http
      .post<Proyecto>(url, body, { headers })
      .pipe(catchError((err) => of(err.error.message)));
  }
}
