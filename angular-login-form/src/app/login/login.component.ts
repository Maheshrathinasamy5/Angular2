import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule

@Component({
  selector: 'app-login',
  standalone: true, // ✅ Mark as standalone
  imports: [CommonModule, FormsModule], // ✅ Add CommonModule & FormsModule
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginSuccess = false;

  onSubmit(): void {
    if (this.username && this.password) {
      this.loginSuccess = true;
      console.log('Form Submitted:', { username: this.username, password: this.password });
    } else {
      this.loginSuccess = false;
    }
  }
}
