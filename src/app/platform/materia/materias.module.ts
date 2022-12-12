import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MateriaCreateComponent } from './materia-creates/materia-create.component';
import { MateriaListComponent } from './materia-list/materia-list.component';
import { MateriasRoutingModule } from './materias-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MateriaCreateComponent,
    MateriaListComponent
  ],
  imports: [
    FontAwesomeModule,
    CommonModule,
    MateriasRoutingModule,
    RouterModule
  ],
  exports: []
})
export class MateriasModule { }
