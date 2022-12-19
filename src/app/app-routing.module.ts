import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { VideosComponent } from './components/videos/videos.component';
import { UsersComponent } from './components/users/users.component';
import { ProfesoresComponent } from './components/profesores/profesores.component';
import { HorariosComponent } from './components/horarios/horarios.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'users', component: UsersComponent},
  { path: 'profesores', component: ProfesoresComponent},
  { path: 'horarios', component: HorariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
