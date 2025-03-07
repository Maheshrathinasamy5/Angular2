import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent }, // ✅ Add Login Route
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Default route
];
