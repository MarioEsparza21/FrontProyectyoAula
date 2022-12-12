import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class registroComponent  {

  constructor(private router: Router, private authService: AuthService,
              private toastr: ToastrService){ }

  miFormulario = new FormGroup({
    correo: new FormControl(''),
  });

  login() {
    const { correo } =  this.miFormulario.value;
    this.authService.login(correo).subscribe({ next: (resp: string | boolean) => {
        if (resp === true)
        this.router.navigate(['../platform']);
      },
      error: (resp: any) => {
        this.toastr.error(`${resp.error.message}`, 'Error');
      },
    });
  }
}
