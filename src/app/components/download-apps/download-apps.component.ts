import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-download-apps',
  templateUrl: './download-apps.component.html',
  styleUrls: ['./download-apps.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class DownloadAppsComponent {
  apps = [
    {
      name: 'ICAR',
      description: 'Application pour particuliers et entreprises pour gérer vos véhicules.',
      playStore: 'https://play.google.com/store/apps/details?id=icar.app',
      appStore: 'https://apps.apple.com/app/icar-app/id1234567890',
      image: 'assets/apps/icar.png'
    },
    {
      name: 'IFIXED',
      description: 'Application pour garagistes, suivi des interventions et historiques.',
      playStore: 'https://play.google.com/store/apps/details?id=ifixed.app',
      appStore: 'https://apps.apple.com/app/ifixed-app/id1234567891',
      image: 'assets/apps/ifixed.png'
    },
    {
      name: 'IPIECE',
      description: 'Application pour vendeurs de pièces détachées, recevoir et répondre aux demandes.',
      playStore: 'https://play.google.com/store/apps/details?id=ipiece.app',
      appStore: 'https://apps.apple.com/app/ipiece-app/id1234567892',
      image: 'assets/apps/ipiece.png'
    }
  ];
}



