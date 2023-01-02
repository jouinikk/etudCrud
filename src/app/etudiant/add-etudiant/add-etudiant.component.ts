import { Component} from '@angular/core';
import { FormGroup,FormControl } from "@angular/forms";
import { EtudiantService } from '../etudiant.service';
import { AuthGuard } from 'src/app/auth/auth.guard';
@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.css']
})
export class AddEtudiantComponent  {
  constructor(private student:EtudiantService,private auth:AuthGuard){};
  addStudent =new FormGroup({
    id: new FormControl(),
    nom : new FormControl(''),
    prenom : new FormControl(''),
    classe : new FormControl('')
  });

  v:boolean=false;
  f:boolean=false;
  SaveData(){
      if(this.addStudent.get('classe')?.value == "C1" || this.addStudent.get('classe')?.value == "C2" || this.addStudent.get('classe')?.value == "C3"){
        this.student.addEtudiant(this.addStudent.value).subscribe((result)=>{
        this.v=true;
        this.f=false;
        this.addStudent.reset({});
      });
      }else{
        this.f=true;
        this.v=false;
      }
  }

  close(){
      this.v=false;
      this.f=false
  }
  logout(){
    this.auth.logout();
   }
}
