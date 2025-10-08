import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Button, ButtonDirective} from 'primeng/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Button, ButtonDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppModule {
  protected readonly title = signal('igrow');
}
