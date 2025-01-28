import { Injectable } from '@angular/core';
import { collection, query, where, getDocs,Firestore ,doc,addDoc,orderBy,deleteDoc} from "@angular/fire/firestore";
import { Auth } from '@angular/fire/auth';
import { Abonnement,abonnementConverter } from './modele/abonnement';
import { Router } from '@angular/router';

import { inject } from '@angular/core';
import { getLocaleMonthNames } from '@angular/common';
@Injectable({
  providedIn: 'root'
})

export class SubsServicesService {


  constructor( private router : Router) {
  

   }

  

  private auth = inject(Auth);
  private firestore = inject(Firestore);
  
   // Lors de la connexion de l'utilisateur



   async pricePerMonth(month : number)
   {
    const user = localStorage.getItem('userId');
     const abonnementsRef = collection( this.firestore , "abonnements" );
     const q = query(
       abonnementsRef,
       where("id_user","==",user),
   
     )
     const querySnapshot = await getDocs(q);
   
   let depenses: number = 0;
   querySnapshot.forEach((doc) => {
   const abonnement = abonnementConverter.fromFirestore(doc);
   if (parseInt(abonnement.datePaiement.split("-")[1])==month)
   depenses+=abonnement.prix;
   
   })
   return depenses;
   
   
   } 


  // obtenir tous les abonnements pour un utilisateur donné : 
async getAllSubs()
{
console.log(this.firestore);
 const user = localStorage.getItem('userId');
console.log(user);
if(user)
{
  console.log("Checkpoint");
  const abonnementsRef = collection( this.firestore , "abonnements" );
  console.log("Référence de la collection : ", abonnementsRef);

const q = query(abonnementsRef, where("id_user", "==",user ), orderBy('datePaiement'));
const querySnapshot = await getDocs(q);

const abonnements: Abonnement[]=[];
querySnapshot.forEach((doc) => {
const abonnement = abonnementConverter.fromFirestore(doc);
abonnements.push(abonnement);
})
return abonnements;

}
else{
  return;
}
}

async addSub(intitle :string, categorie : string, prix : number, datePaiement: string, type : string)
{

  const userId = localStorage.getItem('userId');
  const docRef = await addDoc(collection(this.firestore, "abonnements"), {

    Categorie: categorie   ,
    Intitule :intitle ,
    Prix: prix,
    Type: type,
    datePaiement: datePaiement,
    id_user:this.auth.currentUser?.uid
  });

  console.log("Document written with ID: ", docRef.id);
  window.location.reload();
  
}

//supprimer un abo utilisateur

async delAbbo(id_uti : string , intitule : string, categorie:string,prix: number,datePaiement: string)
{
  const abonnementsRef = collection( this.firestore , "abonnements" );
  const q = query(
    abonnementsRef,
    where("id_user","==",id_uti),
    where("Intitule", "==", intitule),
    where("Categorie","==",categorie),
    where("Prix", "==", prix),
    where("datePaiement", "==", datePaiement)
);

const querySnapshot = await getDocs(q);

if (!querySnapshot.empty) {
    const docRef = querySnapshot.docs[0].ref; // Prendre le premier match
    await deleteDoc(docRef);
    window.location.reload();

}
}



}



