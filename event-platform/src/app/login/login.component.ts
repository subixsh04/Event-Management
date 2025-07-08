import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  private storedUsers = [
    {
      email: 'admin@example.com',
      // hashed version of 'admin123' using SHA-256
      passwordHash: CryptoJS.SHA256('admin123').toString()
    },
    {
      email: 'user@example.com',
      passwordHash: CryptoJS.SHA256('user456').toString()
    }
  ];

  onSubmit() {
    const enteredHash = CryptoJS.SHA256(this.password).toString();
    const foundUser = this.storedUsers.find(
      user => user.email === this.email && user.passwordHash === enteredHash
    );

    //debuging check
    // console.log('Entered email:', this.email);
    // console.log('Entered hash:', enteredHash);
    // console.log('Expected hash:', this.storedUsers.find(u => u.email === this.email)?.passwordHash);

  if(foundUser){      
    alert('Login successful!');
    } else {
      alert('Invalid credentials.');
    }
  }
}
