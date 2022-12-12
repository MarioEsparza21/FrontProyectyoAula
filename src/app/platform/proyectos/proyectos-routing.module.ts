import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProyectoCreateComponent } from './proyecto-create/proyecto-create.component';
import { ProyectoListComponent } from './proyecto-list/proyecto-list.component';
import { ProyectoVerComponent } from './proyecto-ver/proyecto-ver.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'proyecto-create',
        component: ProyectoCreateComponent
      },
      {
        path: 'proyecto-list',
        component: ProyectoListComponent
      },
      {
        path: 'proyecto-ver',
        component: ProyectoVerComponent
      },
      {
        path: '**',
        redirectTo: 'proyecto-list'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectosRoutingModule { }
