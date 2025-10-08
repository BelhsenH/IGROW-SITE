import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit() {
    console.log('Formulaire soumis', this.contact);
    // Ici tu peux appeler ton service API pour envoyer le formulaire
    alert('Merci pour votre message !');
    this.contact = { name: '', email: '', subject: '', message: '' };
  }
}
