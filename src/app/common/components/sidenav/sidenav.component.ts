import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HttpClientModule,
    MatIconModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css',
})
export class SidenavComponent {
  routeChange = output<any>();
  sidenavHidden: boolean = false;
  activeRoute: string | null = null;
  showContent: boolean = false;

  sidenavRoutes = [
    {
      title: 'Dashboard',
    },
    {
      title: 'Radio',
    },
    {
      title: 'Proyectos',
      children: ['Dexcarriados Anonymous', 'Quiz MIH !'],
      showContent: false,
    },
    {
      title: 'Estudios',
      children: ['Todos', 'Pastores', 'Jóvenes'],
      showContent: false,
    },
    {
      title: 'Miembros',
      children: ['Colaboradores', 'Iglesias', 'Sector IT'],
      showContent: false,
    },
    {
      title: 'Más información',
      children: ['Misión y visión', 'Contáctanos', 'FAQs'],
      showContent: false,
    },
  ];

  constructor() {}

  toggleSidenav() {
    this.sidenavHidden = !this.sidenavHidden;
  }

  selectedRoute(route: any, i?: any) {
    if (i !== undefined) {
      this.activeRoute = route.children[i];
      this.routeChange.emit(this.activeRoute);
      return;
    }
    if (route?.children !== undefined) {
      if (this.activeRoute === route.title) {
        this.showContent = !this.showContent;
        return;
      }
      this.showContent = true;
      this.activeRoute = route.title;
    } else {
      this.activeRoute = route.title;
      this.routeChange.emit(this.activeRoute);
    }
  }

  isRouteActive(routeTitle: string): boolean {
    return this.activeRoute === routeTitle;
  }
}
