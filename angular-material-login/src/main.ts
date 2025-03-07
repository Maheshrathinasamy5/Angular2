import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { LoginComponent } from './app/login/login.component';  // Adjust path if needed

platformBrowserDynamic()
  .bootstrapModule(LoginComponent)
  .catch(err => console.error(err));
