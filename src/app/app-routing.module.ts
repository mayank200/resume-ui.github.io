import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [

  {path: 'resume-ui',component: HomeComponent},

  {path: '', pathMatch: 'full', redirectTo: 'resume-ui'},
  {path: '**', pathMatch: 'full', redirectTo: 'resume-ui'},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
