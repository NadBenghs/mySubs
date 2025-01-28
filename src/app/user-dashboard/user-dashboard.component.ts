import { Component } from '@angular/core';
import { SubsServicesService } from '../subs-services.service';
import { Abonnement } from '../modele/abonnement';
import { NgFor } from '@angular/common';
import { AddBarComponent } from "../add-bar/add-bar.component";
import { NgxChartsModule, ChartCommonModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [NgFor, AddBarComponent, NgxChartsModule],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {

  abonnements?: Abonnement[] = [];
  data: any[] = [];

  constructor(private subService: SubsServicesService) {}

  async ngOnInit() {
    // Récupération de tous les abonnements
    await this.loadAbonnements();

    // Somme des dépenses par mois
    const total1: number = await this.subService.pricePerMonth(1);
    const total2: number = await this.subService.pricePerMonth(2);
    const total3: number = await this.subService.pricePerMonth(3);
    const total4: number = await this.subService.pricePerMonth(4);
    const total5: number = await this.subService.pricePerMonth(5);
    const total6: number = await this.subService.pricePerMonth(6);
    const total7: number = await this.subService.pricePerMonth(7);
    const total8: number = await this.subService.pricePerMonth(8);
    const total9: number = await this.subService.pricePerMonth(9);
    const total10: number = await this.subService.pricePerMonth(10);
    const total11: number = await this.subService.pricePerMonth(11);
    const total12: number = await this.subService.pricePerMonth(12);

    // Assigne les valeurs des totaux dans le tableau
    this.data = [
      { name: 'Jan', value: total1 },
      { name: 'Feb', value: total2 },
      { name: 'Mar', value: total3 },
      { name: 'Avr', value: total4 },
      { name: 'Mai', value: total5 },
      { name: 'Juin', value: total6 },
      { name: 'Juillet', value: total7 },
      { name: 'Aout', value: total8 },
      { name: 'Sept', value: total9 },
      { name: 'Oct', value: total10 },
      { name: 'Nov', value: total11 },
      { name: 'Dec', value: total12 }
    ];


  }

  async loadAbonnements() {
    try {
      this.abonnements = await this.subService.getAllSubs();
      console.log(this.abonnements);
    } catch (error) {
      console.error('Error loading abonnements:', error);
    }
  }

  nombreJoursRestants(date: string) {
    const dateFormatee = new Date(date).getTime();
    const dateActuelle = new Date().getTime();
    return Math.ceil((dateFormatee - dateActuelle) / (1000 * 60 * 60 * 24));
  }

  supprimerAbo(id_uti: string, intitule: string, categorie: string, prix: number, datePaiement: string) {
    this.subService.delAbbo(id_uti, intitule, categorie, prix, datePaiement);

  }

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
   // Configuration des axes et de l'étiquetage
   showXAxis = true;
   showYAxis = true;
   showXAxisLabel = true;
   showYAxisLabel = true;
   xAxisLabel = 'Mois';
   yAxisLabel = 'Total des dépenses';
}

