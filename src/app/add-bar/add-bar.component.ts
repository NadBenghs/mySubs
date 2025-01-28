import { Component,Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SubsServicesService } from '../subs-services.service';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-add-bar',
  standalone: true,
  imports: [FormsModule,NgFor],
  templateUrl: './add-bar.component.html',
  styleUrl: './add-bar.component.css'
})

export class AddBarComponent {

  constructor(private subService : SubsServicesService){

  }

  title: string = '';
  category: string = '';
  price: number = 0;
  paymentDate: string = '';
  type: string = '';

  categories = ['Divertissement', 'Alimentation', 'Sport', 'Education','Utilitaire','Autres'];
  types = ['Mensuel', 'Trimestriel', 'Annuel'];

  onSubmit(): void {
    const formData = {
      intitule: this.title,
      categorie: this.category,
      prix: this.price,
      datePaiement: this.paymentDate,
      type: this.type
    };


    console.log(formData);
    this.subService.addSub(formData.intitule,formData.categorie,formData.prix,formData.datePaiement,formData.type);
    
  }

  

}
