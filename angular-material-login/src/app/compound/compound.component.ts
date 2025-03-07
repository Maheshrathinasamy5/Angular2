import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-compound',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    FormsModule,
    CommonModule // Include CommonModule here
  ],
  templateUrl: './compound.component.html',
  styleUrls: ['./compound.component.css'],
})
export class CompoundComponent {
  username: string = '';
  password: string = '';

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Submitted!', this.username, this.password);
    }
  }

  
}
