import { Component,OnInit } from '@angular/core';
import { EtudiantService } from '../etudiant.service';
import { AuthGuard } from 'src/app/auth/auth.guard';
@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.css']
})
export class ListEtudiantComponent implements OnInit{
  
  constructor(private etudiant:EtudiantService,private auth:AuthGuard){}
  etudiantData:any={};
  ngOnInit(): void {
    this.etudiant.getEtudiants().subscribe((allData)=>{
      this.etudiantData=allData
    })
  }
   delete(id:any){
    this.etudiant.deleteEtudiant(id).subscribe((result)=>{
        this.ngOnInit();
    });
   }
   logout(){
    this.auth.logout();
   }
}
