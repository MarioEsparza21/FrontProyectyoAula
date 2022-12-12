import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectosRoutingModule } from './proyectos-routing.module';
import { RouterModule, Routes } from '@angular/router';

import { ProyectoCreateComponent } from './proyecto-create/proyecto-create.component';
import { ProyectoListComponent } from './proyecto-list/proyecto-list.component';

@NgModule({
  declarations: [
    ProyectoCreateComponent,
    ProyectoListComponent
  ],
  imports: [
    CommonModule,
    ProyectosRoutingModule
  ]
})
export class ProyectosModule { }
