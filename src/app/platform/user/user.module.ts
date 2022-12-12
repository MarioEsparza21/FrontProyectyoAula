import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserCreateComponent } from './user-create/user-create.component';
import { UserListComponent } from './user-list/user-list.component';
import { ActualizarUserComponent } from './actualizar-user/actualizar-user.component';


@NgModule({
  declarations: [
    UserCreateComponent,
    UserListComponent,
    ActualizarUserComponent
  ],
  imports: [
    CommonModule
  ],
  exports: []
})
export class UserModule { }
