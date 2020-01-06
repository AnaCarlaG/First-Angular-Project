import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListarComponent } from './listar/listar.component';


const routes: Routes = [
  {
    path:'home',component:HomeComponent
  },
  {
    path:'home/listar',component:ListarComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
