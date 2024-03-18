import {ChangeDetectorRef, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Subscription} from 'rxjs';
import {filter} from 'rxjs/operators';
import {MenuService} from './app.menu.service';
import {AppMainComponent} from './app.main.component';
import { NgIf, NgClass, NgFor } from '@angular/common';

@Component({
    /* tslint:disable:component-selector */
    selector: '[app-menuitem]',
    /* tslint:enable:component-selector    [routerLink]="item.routerLink" routerLinkActive="active-menuitem-routerlink" */
    // verificar Line 26 [routerLinkActiveOptions]="{exact: true}"
    template: `
		<ng-container>
			<a [attr.href]="item.url" [ngClass]="item.class"
			   *ngIf="!item.routerLink || item.items"
			   [attr.target]="item.target" [attr.tabindex]="0" pRipple>
				<i [ngClass]="item.icon" class="layout-menuitem-icon"></i>
				<span>{{item.label}}</span>
				<span class="menuitem-badge" *ngIf="item.badge">{{item.badge}}</span>
				<i class="pi pi-fw pi-angle-down layout-submenu-toggler" *ngIf="item.items"></i>
			</a>
			<a *ngIf="item.routerLink && !item.items" [ngClass]="item.class"
			  [attr.target]="item.target" [attr.tabindex]="0" pRipple>
				<i [ngClass]="item.icon" class="layout-menuitem-icon"></i>
				<span>{{item.label}}</span>
				<span class="menuitem-badge" *ngIf="item.badge">{{item.badge}}</span>
				<i class="pi pi-fw pi-angle-down layout-submenu-toggler" *ngIf="item.items"></i>
			</a>
			<ul *ngIf="item.items && active" [@children]="(active ? 'visibleAnimated' : 'hiddenAnimated')">
				<ng-template ngFor let-child let-i="index" [ngForOf]="item.items">
					<li app-menuitem [item]="child" [index]="i" [parentKey]="key" [class]="child.badgeClass"></li>
				</ng-template>
			</ul>
		</ng-container>
    `,
    host: {
        '[class.active-menuitem]': 'active'
    },
    animations: [
        trigger('children', [
            state('void', style({
                height: '0px'
            })),
            state('hiddenAnimated', style({
                height: '0px'
            })),
            state('visibleAnimated', style({
                height: '*'
            })),
            transition('visibleAnimated => hiddenAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
            transition('hiddenAnimated => visibleAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
            transition('void => visibleAnimated, visibleAnimated => void', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
        ])
    ],
    standalone: true,
    imports: [NgIf, NgClass, NgFor]
})
export class AppMenuitemComponent {
    // Animation Toggle Menu --> [@children]="(active ? 'visibleAnimated' : 'hiddenAnimated')"
    @Input() item!: any;

    @Input() index!: number;

    @Input() root!: boolean;

    @Input() parentKey!: string;

    active = false;

    menuSourceSubscription: Subscription;

    menuResetSubscription: Subscription;

    key!: string;

    constructor(public app: AppMainComponent, public router: Router, private cd: ChangeDetectorRef, private menuService: MenuService) {
        this.menuSourceSubscription = this.menuService.menuSource$.subscribe(key => {
            // deactivate current active menu highlight
            if (this.active && this.key !== key && key.indexOf(this.key) !== 0) {
                this.active = false;
            }
        });

        this.menuResetSubscription = this.menuService.resetSource$.subscribe(() => {
            this.active = false;
        });

        // Toggle Navigation Menu items on navigation
        this.router.events.pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(params => {
                if (this.item.routerLink) {
                    this.updateActiveStateFromRoute();
                } else {
                   // this.active = false;
                }
            });
    }

    ngOnInit() {
        if (this.item.routerLink) {
            this.updateActiveStateFromRoute();
        }

        this.key = this.parentKey ? this.parentKey + '-' + this.index : String(this.index);
    }

    updateActiveStateFromRoute() {
        this.active = this.router.isActive(this.item.routerLink[0], this.item.items ? false : true);
    }

}
