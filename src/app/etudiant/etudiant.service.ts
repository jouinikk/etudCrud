import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ThisReceiver } from '@angular/compiler';
import { NgFor } from '@angular/common';
@Injectable({
  providedIn: 'root'
})

export class EtudiantService {
  url='http://localhost:3000/etudiant';
  constructor(private http:HttpClient) { }
  getEtudiants(){
    return this.http.get(this.url);
  }
  addEtudiant(data:any){
    
    return this.http.post(this.url,data);
  }
  deleteEtudiant(id:any){
    return this.http.delete( this.url+"/"+id );
  }
  getStudentById(id:any){
    return this.http.get(this.url+"/"+id);
  }
  updateStudent(id:number,data:any){
    return this.http.put(this.url+"/"+id,data);
  }

}
 