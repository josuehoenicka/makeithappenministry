import { Component} from '@angular/core';
import { SidenavComponent } from './common/components/sidenav/sidenav.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    SidenavComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor() {}
  currentView: any = "Dashboard";

  onRouteChange(route: string) {
    console.log(route);
    this.currentView = route;
  }
}
