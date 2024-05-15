import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacienteListComponent } from './paciente/paciente-list/paciente-list.component';
import { PacienteDetailComponent } from './paciente/paciente-detail/paciente-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/pacientes', pathMatch: 'full' },
  { path: 'pacientes', component: PacienteListComponent },
  { path: 'detalle-paciente/:id', component: PacienteDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }