import { Injectable, ɵɵresolveBody } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthResponse } from '../auth/pages/interfaces/auth.interface';
import { map, tap, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.authUrl + '/api';

  constructor(private http: HttpClient) { }

  login(correo: any): any{

    const url = `${this.baseUrl}/auth/login/${correo}`;
    const body = correo;

    return this.http.post(url,body)
    .subscribe((resp: any) => {
      localStorage.setItem('auth_token', resp.token);
      })
    }

}
