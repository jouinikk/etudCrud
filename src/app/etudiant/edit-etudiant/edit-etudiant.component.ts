import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms';
import { EtudiantService } from '../etudiant.service';
import { ActivatedRoute } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
@Component({
  selector: 'app-edit-etudiant',
  templateUrl: './edit-etudiant.component.html',
  styleUrls: ['./edit-etudiant.component.css']
})
export class EditEtudiantComponent implements OnInit{

  constructor(private student:EtudiantService,private router:ActivatedRoute,private auth:AuthGuard){}
  editstudent =new FormGroup({
    nom : new FormControl(''),
    prenom : new FormControl(''),
    classe : new FormControl('')
  });
  id:any="";
  v:boolean=false;
  f:boolean=false;
  ngOnInit():void{
    // console.log(this.router.snapshot.params['id'])
    this.student.getStudentById(this.router.snapshot.params['id']).subscribe((result:any)=>{
      this.editstudent =new FormGroup({
        nom : new FormControl(result['nom']),
        prenom : new FormControl(result['prenom']),
        classe : new FormControl(result['classe'])
      });
    this.id=this.router.snapshot.params['id'];
    });
  }
  UpdateData(){
    let a:any=this.editstudent.value;
      this.student.updateStudent(this.router.snapshot.params['id'],a).subscribe((result)=>{
        console.log(result)
      });
    this.ngOnInit();
  }

  close(){
      this.v=false;
      this.f=false
  }

  logout(){
    this.auth.logout();
   }
}
