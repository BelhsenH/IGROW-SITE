import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class AppsComponent {
  apps = [
    { name: 'ICAR', description: 'Application mobile pour particuliers et entreprises', icon: 'pi pi-mobile' },
    { name: 'IFIXED', description: 'Application mobile pour garagistes', icon: 'pi pi-wrench' },
    { name: 'IPIECE', description: 'Application mobile pour vendeurs de pièces détachées', icon: 'pi pi-box' }
  ];
}
