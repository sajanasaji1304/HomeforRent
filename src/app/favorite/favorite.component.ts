import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { FilterPipe } from '../filter.pipe';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.css'
})
export class FavoriteComponent {
  
  favoriteProperties: any[] = [];
  selectedProperty: any = null;
  sidebarOpen = false;

  constructor(private serviceService:ServiceService, private router: Router){}

  ngOnInit(){
    this.favoriteProperties=this.serviceService.favoriteProperties
  }


  openPropertyDetails(property: any) {
    this.selectedProperty = property;
    this.sidebarOpen = true;
  }

  closePropertyDetails() {
    this.sidebarOpen = false;
    this.selectedProperty = null;
  }

  logout(){
    this.router.navigate(['/login'])
  }

  goHome(){
    this.router.navigate(['/home'])
  }

}
