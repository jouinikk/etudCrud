import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    FormGroup,
    FormControl
  ]
})
export class EtudiantModule { }
export class Etudiant{
  private nom:string = "";
  private prenom:string = "";
  private classe:string = "";
}