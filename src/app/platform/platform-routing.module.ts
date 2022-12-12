import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatformComponent } from './platform.component';


const routes: Routes = [
  {
    path:'',
    component: PlatformComponent,
    children:[
      {
        path:'materia',
        loadChildren: () => import('./materia/materias.module').then( m => m.MateriasModule)
      },
      {
        path:'proyectos',
        loadChildren: () => import('./proyectos/proyectos.module').then( m => m.ProyectosModule)
      },
      {
        path:'user',
        loadChildren: () => import('./user/user.module').then( m => m.UserModule)
      },
      {
        path:'**',
        redirectTo:'materia'
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatformRoutingModule {}
