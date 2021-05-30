import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SolicitudesComponent} from './solicitudes/solicitudes.component';


const routes: Routes = [

  {
    path: '',
    component: SolicitudesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
