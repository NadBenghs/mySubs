


export class Abonnement {
  categorie : string="";
  intitule: string="";
  prix : number=0;
  type:string="";
  datePaiement:string="";
  id_user:string="";



  constructor(categorie: string,
    intitule:string,
    prix: number,
    type: string,
    datePaiement: string,
    id_user: string)
 {
  this.categorie=categorie;
  this.intitule=intitule;
  this.prix=prix,
  this.type=type;
  this.datePaiement=datePaiement;
  this.id_user=id_user;

  }

   
}

export const abonnementConverter = {
  toFirestore: (abonnement: Abonnement) => {
      return {
          categorie: abonnement.categorie,
          intitule: abonnement.intitule,
          prix: abonnement.prix,
          type: abonnement.type,
          datePaiement:abonnement.datePaiement,
          id_user:abonnement.id_user
          
          };
  },
  fromFirestore: (snapshot: any) => {
      const data = snapshot.data();
      return new Abonnement(data.Categorie, data.Intitule, data.Prix,data.Type,data.datePaiement,data.id_user);
  }
 

 
 
}

 