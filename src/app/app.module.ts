import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavegationComponent } from './navegation-bar/navegation.component';
import { SequencePictureComponent } from './home/sequence-picture/sequence-picture.component';
import { FooterComponent } from './footer/footer.component';
import { RankingComponent } from './ranking/ranking.component';
import { ListarComponent } from './listar/listar.component';
import { GenerosComponent } from './generos/generos.component';
import { HttpClientModule } from '@angular/common/http';
import { ShoujoComponent } from './generos/shoujo/shoujo.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { PhotoComponent } from './photo/photo.component';
import { PhotoService } from './services/photo-service.service';


@NgModule({ 
  declarations: [
    AppComponent,
    HomeComponent,
    NavegationComponent,
    SequencePictureComponent,
    FooterComponent,
    RankingComponent,
    ListarComponent,
    GenerosComponent,
    ShoujoComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [PhotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
