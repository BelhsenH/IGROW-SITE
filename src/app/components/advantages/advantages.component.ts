import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class AdvantagesComponent {
  advantages = [
    {
      icon: 'bi-speedometer2',
      title: 'Rapide et efficace',
      description: 'Accédez rapidement à toutes les informations de vos véhicules et interventions.'
    },
    {
      icon: 'bi-shield-check',
      title: 'Sécurisé',
      description: 'Vos données sont protégées avec les standards les plus élevés de sécurité.'
    },
    {
      icon: 'bi-phone',
      title: 'Accessible partout',
      description: 'Suivez vos véhicules et interventions via votre mobile ou ordinateur.'
    },
    {
      icon: 'bi-people',
      title: 'Collaboratif',
      description: 'Partagez facilement les informations avec garagistes et vendeurs de pièces.'
    }
  ];
}
