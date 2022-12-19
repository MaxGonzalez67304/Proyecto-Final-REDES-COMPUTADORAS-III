import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { YoutubePipe } from './pipe/youtube.pipe';
import { ContactoComponent } from './components/contacto/contacto.component';
import { VideosComponent } from './components/videos/videos.component';
import { UsersComponent } from './components/users/users.component';
import { ProfesoresComponent } from './components/profesores/profesores.component';
import { HorariosComponent } from './components/horarios/horarios.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    YoutubePipe,
    ContactoComponent,
    VideosComponent,
    UsersComponent,
    ProfesoresComponent,
    HorariosComponent,
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
