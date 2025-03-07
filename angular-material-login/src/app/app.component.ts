import { Component } from '@angular/core';
import { CompoundComponent } from './compound/compound.component';
import { FormsModule } from '@angular/forms';  // Import FormsModule for ngModel

@Component({
  selector: 'app-root',
  template: '<app-compound></app-compound>',
  standalone: true,
  imports: [CompoundComponent, FormsModule],  // Import FormsModule here
})
export class AppComponent {}
