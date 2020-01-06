import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavegationComponent } from './navegation-bar/navegation.component';
import { SequencePictureComponent } from './sequence-picture/sequence-picture.component';
import { FooterComponent } from './footer/footer.component';
import { RankingComponent } from './ranking/ranking.component';
import { ListarComponent } from './listar/listar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavegationComponent,
    SequencePictureComponent,
    FooterComponent,
    RankingComponent,
    ListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
