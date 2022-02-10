import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componente/home/home.component';
import { PresentesComponent } from './componente/presentes/presentes.component';
import { CreatePresentesComponent } from './componente/create-presentes/create-presentes.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "presentes", component: PresentesComponent },
  { path: "create-presente", component: CreatePresentesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
