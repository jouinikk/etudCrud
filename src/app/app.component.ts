import { Component} from '@angular/core';
import { AuthGuard } from './auth/auth.guard';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  title = 'Etudiants-CRUDOFFLINE';
  constructor(private auth:AuthGuard){}
  logout(){
    this.auth.logout();
  }
}

