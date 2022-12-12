import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { loginComponent } from './pages/login/login.component';
import { registroComponent } from './pages/registro/registro.component';

import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    loginComponent,
    registroComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ],
  exports: []
})
export class AuthModule {

}
