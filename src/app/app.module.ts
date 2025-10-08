import { Component, signal } from '@angular/core';
import {ServicesComponent} from './components/services/services.component';
import {FooterComponent} from './components/footer/footer.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {AppsComponent} from './components/apps/apps.component';
import {AboutComponent} from './components/about/about.component';
import {ContactComponent} from './components/contact/contact.component';
import {HeroComponent} from './components/hero/hero.component';
import {AdvantagesComponent} from './components/advantages/advantages.component';
import {DownloadAppsComponent} from './components/download-apps/download-apps.component';
import {BackToTopComponent} from './shared/back-to-top/back-to-top.component';

@Component({
  selector: 'app-root',
  imports: [ServicesComponent, FooterComponent, NavbarComponent, AppsComponent, AboutComponent, ContactComponent, HeroComponent, AdvantagesComponent, DownloadAppsComponent, BackToTopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppModule {
  protected readonly title = signal('igrow');
}
