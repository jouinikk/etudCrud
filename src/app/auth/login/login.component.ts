import { Component } from '@angular/core';
import { FormGroup,FormControl,ReactiveFormsModule,FormsModule } from "@angular/forms";
import { AuthGuard } from '../auth.guard';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  v:boolean=false;
  constructor(private auth:AuthGuard){}
  log =new FormGroup({
    a: new FormControl(),
    b : new FormControl('')
  });

  sub(){
    if (this.log.get('a')?.value!='admin' || this.log.get('b')?.value!='admin') {
      this.v=true;
      this.auth.logout();
      this.log.reset({});
    }else{
      this.auth.login();
    }
  }
}
