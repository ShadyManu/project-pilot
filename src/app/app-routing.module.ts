import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { homeStateKey } from './features/home/store/reducers/home.reducer';

const routes: Routes = [
  {
    path: 'project-builder',
    loadChildren: () => import('./features/project-builder/project-builder.module').then(m => m.ProjectBuilderModule)
  },
  {
    path: homeStateKey,
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: '',
    redirectTo: homeStateKey,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
