enum Classe {
    C1,C2,C3
}
export class Etudiant {
  
    private nom:string;
    private prenom:string;
    private classe:Classe;
      
    constructor(nom:string ="",prenom:string ="",classe:Classe=Classe.C1){
        this.nom=nom;
        this.prenom=prenom;
        this.classe=classe;
    }
      
    getNom():string{
        return this.nom             
    }
      
        
    getPrenom():string{
        return this.prenom
    }
      
    getClasse():Classe{
        return this.classe
    }
        
}
      

