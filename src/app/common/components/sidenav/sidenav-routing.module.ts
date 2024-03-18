import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppMainComponent } from './omega-template/app.main.component';
import { AuthGuard } from '../../helpers/auth-guard.service';
import { AccessDeniedComponent } from '../access-denied/access-denied.component';
import { DashboardComponent } from '../../../dashboard/dashboard/dashboard.component';
import { DASHBOARD_ROUTES } from '../../services/sidenav.routing-modules/dashboard.sidenav-routes';
import { CLIENTES_ROUTES } from '../../services/sidenav.routing-modules/clientes.sidenav-routes';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  {
    path: '',
    component: AppMainComponent,
    canActivate: [AuthGuard],
    children: [
      DASHBOARD_ROUTES,
      CLIENTES_ROUTES,
      { path: 'acceso-denegado', component: AccessDeniedComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SidenavRoutingModule {
  constructor() {}
}
