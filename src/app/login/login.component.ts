import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = {
    username: '',
    password: ''
  };

  userData: any = {
    username: '',
    password: '',
};

  constructor(private router: Router,private serviceService:ServiceService) { }
  onLogin() {
    const { username, password } = this.loginData;
    const userFound = this.serviceService.user.find(user => user.username === username && user.password === password);
    if (userFound) {
      this.router.navigate(['/home']);    
    } else {
      alert('Invalid credentials');
    }
  }

  submitForm() {
    console.log('Form submitted:', this.userData);
    this.serviceService.addUser(this.userData);
    this.userData={}
    alert('thankyou for registering, Please SignIn')
}
}



