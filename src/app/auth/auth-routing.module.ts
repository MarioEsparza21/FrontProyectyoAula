import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth.component';
import { loginComponent } from './pages/login/login.component';
import { registroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: loginComponent
      },
      {
        path: 'registro',
        component: registroComponent
      },
      {
        path: '**',
        redirectTo: 'login'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
