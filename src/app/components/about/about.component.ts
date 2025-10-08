import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class AboutComponent {
  title = 'À propos de la suite ICAR / IFIXED / IPIECE';
  description = `
    La suite ICAR / IFIXED / IPIECE est une plateforme complète qui digitalise la gestion de
    véhicules et la maintenance automobile. Elle connecte les particuliers, les garagistes et
    les vendeurs de pièces détachées dans un écosystème intelligent.

    Notre objectif est d’améliorer l’efficacité du suivi d’entretien, de faciliter les transactions
    entre acteurs de l’automobile, et d’offrir un modèle économique flexible basé sur abonnement,
    publicité et marketplace.
  `;

  features = [
    'ICAR : Gestion complète des véhicules pour particuliers et entreprises',
    'IFIXED : Outils de maintenance et suivi pour les garagistes',
    'IPIECE : Matching automatique des demandes et offres pour vendeurs de pièces',
    'Notifications intelligentes et rappels personnalisés',
    'Système de fidélité et de parrainage intégré',
    'Interface web et mobile moderne et intuitive'
  ];
}
