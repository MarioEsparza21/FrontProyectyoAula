import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PlatformModule } from './platform/platform.module';


const routes: Routes = [
  {
    path:'',
    component: AppComponent,
    children:[
      {
        path:'auth',
        loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)
      },
      {
        path:'platform',
        loadChildren: () => import('./platform/platform.module').then( m => m.PlatformModule)
      },
      {
        path:'**',
        redirectTo:'auth'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  
}
