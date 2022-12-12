import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserCreateComponent } from './user-create/user-create.component';
import { UserListComponent } from './user-list/user-list.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'user-create',
        component: UserCreateComponent
      },
      {
        path: 'user-list',
        component: UserListComponent
      },
      {
        path: '**',
        redirectTo: 'user-list'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MateriasRoutingModule { }
