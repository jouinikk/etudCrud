import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { AddEtudiantComponent } from './etudiant/add-etudiant/add-etudiant.component';
import { EditEtudiantComponent } from './etudiant/edit-etudiant/edit-etudiant.component';
import { ListEtudiantComponent } from './etudiant/list-etudiant/list-etudiant.component';
const routes: Routes = [
  
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'edit/:id',
    component:EditEtudiantComponent,
    canActivate: [AuthGuard]

  },
  {
    path:'add',
    component:AddEtudiantComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'list',
    component:ListEtudiantComponent,
    canActivate: [AuthGuard]
  },
  {
    path : "", 
    redirectTo : "login", 
    pathMatch : "full"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
