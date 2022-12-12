import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MateriaCreateComponent } from './materia-creates/materia-create.component';
import { MateriaListComponent } from './materia-list/materia-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'materia-create',
        component: MateriaCreateComponent
      },
      {
        path: 'materia-list',
        component: MateriaListComponent
      },
      {
        path: '**',
        redirectTo: 'materia-list'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MateriasRoutingModule { }
