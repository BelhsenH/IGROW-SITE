import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class NavbarComponent {
  logoUrl = 'assets/logo.png'; // chemin du logo
  navLinks = [
    { name: 'Accueil', link: 'top' },
    { name: 'À propos', link: '#about' },
    { name: 'Services', link: '#services' },
    { name: 'Avantages', link: '#advantages' },
    { name: 'Applications', link: '#apps' },
    { name: 'Télécharger nos applications', link: '#Downloadapps' },
    { name: 'Contact', link: '#contact' }
  ];

  scrollTo(link: string) {
    if (link === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(link);
      if (element) {
        // scroll avec un offset pour la navbar fixe
        const yOffset = -70; // hauteur approximative de la navbar
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  }


}
