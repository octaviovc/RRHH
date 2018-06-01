import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { SessionGuard } from './shared/guards/session.guard';
import { LogonComponent } from './logon/logon.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent, canActivate: [SessionGuard]},
  {path: 'logon', component: LogonComponent, canActivate: [SessionGuard]},
  {path: '**', component: HomeComponent, canActivate: [SessionGuard]}



];

export const routing = RouterModule.forRoot(appRoutes);
