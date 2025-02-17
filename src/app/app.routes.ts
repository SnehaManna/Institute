import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './pages/student/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/login'
      },
    {path:'login',component:LoginComponent},
    {path:'signup',component:RegisterComponent},
    {path:'dashboard', component: DashboardComponent}
];
