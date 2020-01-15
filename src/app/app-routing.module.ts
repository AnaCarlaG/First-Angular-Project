import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ListarComponent } from './listar/listar.component';
import { RankingComponent } from './ranking/ranking.component';
import { GenerosComponent } from './generos/generos.component';
import { ShoujoComponent } from './generos/shoujo/shoujo.component';




const routes: Routes = [
  {
    path: '',component:HomeComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'listar',component:ListarComponent
  },
  {
    path:'ranking',component:RankingComponent
  },
  {
    path:'generos',component:GenerosComponent
  },
  {
    path:'shoujo',component:ShoujoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



