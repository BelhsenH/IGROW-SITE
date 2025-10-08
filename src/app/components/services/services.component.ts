import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- important

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  standalone: true,
  imports: [CommonModule] // <-- ajoute ici
})
export class ServicesComponent {
  services = [
    { title: 'Gestion véhicules', description: 'Ajout, suivi et historique complet des véhicules pour particuliers et entreprises.', icon: 'pi pi-car' },
    { title: 'Maintenance', description: 'Suivi des interventions, alertes et notifications intelligentes pour tous les véhicules.', icon: 'pi pi-cog' },
    { title: 'Abonnement & Paiement', description: 'Gestion des abonnements avec paiement mobile ou carte bancaire et relances automatiques.', icon: 'pi pi-credit-card' },
    { title: 'QR Code & Transfert', description: 'Transfert sécurisé des véhicules avec QR Code et historique complet.', icon: 'pi pi-qrcode' }
  ];
}
