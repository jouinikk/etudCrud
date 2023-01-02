import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormControl, FormGroup, FormsModule,ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    FormGroup,
    FormControl,
    FormsModule,
    ReactiveFormsModule
    
  ]
})
export class AuthModule {
  
 }
