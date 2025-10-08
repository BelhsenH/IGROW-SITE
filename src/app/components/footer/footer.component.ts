import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class FooterComponent {
  companyName = 'ICAR Suite';
  logoUrl = 'assets/logo.png'; // mettez le chemin de votre logo
  usefulLinks = [
    { name: 'Accueil', link: '#home' },
    { name: 'Services', link: '#services' },
    { name: 'Avantages', link: '#advantages' },
    { name: 'Applications', link: '#apps' },
    { name: 'À propos', link: '#about' },
    { name: 'Contact', link: '#contact' }
  ];
  contactInfo = {
    address: '123 Rue Principale, Tunis, Tunisie',
    phone: '+216 21 234 567',
    email: 'contact@icar-suite.com'
  };
}
