import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Chart, registerables } from 'chart.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(public authService: AuthService, private router: Router) { }
  ngOnInit(): void {
   
  }


  goToDashboard() {
    if (this.authService.isAdmin()) {
      this.router.navigate(['/admin'])
    }
    else if (this.authService.isUser()) {
      this.router.navigate(['/user'])
    }
  }
  onLogout() {
    this.authService.emptyStorage()
    this.router.navigate(['/home'])
  }



}

