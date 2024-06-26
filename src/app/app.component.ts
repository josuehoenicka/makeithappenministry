import { Component } from '@angular/core';
import { SidenavComponent } from './common/components/sidenav/sidenav.component';
import { CommonModule, NgIf } from '@angular/common';
import { RadioComponent } from './radio/radio.component';
import { JuegoBiblicoAntiguoTestamento } from './quizgame/antiguo-testamento';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    SidenavComponent,
    RadioComponent,
    JuegoBiblicoAntiguoTestamento,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor() {}
  currentView: string = 'Antiguo Testamento';

  onRouteChange(route: any) {
    this.currentView = route;
  }
}
