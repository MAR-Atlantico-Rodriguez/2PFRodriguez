import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from '../pages/alumnos/alumnos.component';
import { CursosComponent } from '../pages/cursos/cursos.component';
import { InscripcionesComponent } from '../pages/inscripciones/inscripciones.component';

const routes: Routes = [
  {
    path: 'cursos',
    component: CursosComponent,
    loadChildren: () => import('../pages/cursos/cursos.module').then(m => m.CursosModule)
  },
  {
    path: 'alumnos',
    component: AlumnosComponent,
    loadChildren: () => import('../pages/alumnos/alumnos.module').then(m => m.AlumnosModule)
  },
  {
    path: 'inscripciones',
    component: InscripcionesComponent,
    loadChildren: () => import('../pages/inscripciones/inscripciones.module').then(m => m.InscripcionesModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
