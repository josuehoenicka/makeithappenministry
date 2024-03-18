import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CliMenuHandlerService } from '../../../services/menu-handler/cli-menu-handler.service';
import { AppMenuitemComponent } from './app.menuitem.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-menu',
  template: `
    <div class="menu">
      <ul class="layout-menu">
        <!-- @for (item of model; track $index) {} -->
        <li
          app-menuitem
          *ngFor="let item of model; let i = index"
          [item]="item"
          [index]="i"
          [root]="true"
        ></li>
      </ul>
    </div>
  `,
  standalone: true,
  imports: [NgFor, AppMenuitemComponent],
})
export class AppMenuComponent implements OnInit {
  loadingMenu: boolean = false;
  arr_menu: any[] = [];
  model!: any[];

  constructor(
    public cliMenuService: CliMenuHandlerService,
    public router: Router
  ) {}

  ngOnInit() {
    this.model = [
      {
        label: 'Dash Board',
        icon: `pi pi-microsoft `,
        command: (event: any) => this.navigateToDashboard(),
        id: '0',
      },
      {
        label: 'Clientes',
        icon: 'pi pi-fw pi-file',
        items: [],
        id: '1',
      },
    ];
  }

  navigateToDashboard() {
    this.router.navigate(['/']);
  }
}
