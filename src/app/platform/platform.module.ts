import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatformRoutingModule } from './platform-routing.module';
import { SharedModule } from './shared/shared.module';
import { PlatformComponent } from './platform.component';
import { MateriasModule } from './materia/materias.module';


@NgModule({
  declarations: [
    PlatformComponent
  ],
  imports: [
    CommonModule,
    PlatformRoutingModule,
    SharedModule,
  ],
  exports: []
})
export class PlatformModule { }
