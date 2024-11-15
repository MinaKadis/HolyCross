import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { EventsComponent } from './components/events/events.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    ServicesComponent,
    EventsComponent,
    FooterComponent
  ],
  template: `
    <app-header></app-header>
    <main>
      <app-hero></app-hero>
      <app-services></app-services>
      <app-events></app-events>
    </main>
    <app-footer></app-footer>
  `,
  styles: [`
    :host {
      display: block;
      font-family: 'Poppins', sans-serif;
      line-height: 1.6;
      color: var(--text-color);
      background-color: var(--bg-color);
    }
  `]
})
export class AppComponent {}