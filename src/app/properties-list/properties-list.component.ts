import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../filter.pipe';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-properties-list',
  standalone: true,
  templateUrl: './properties-list.component.html',
  styleUrls: ['./properties-list.component.css'],
  imports: [CommonModule, FormsModule,  MatIconModule, FilterPipe]
})
export class PropertiesListComponent implements OnInit {
  constructor(private router: Router, private serviceService: ServiceService) { }
  properties: any;
  favoriteProperties: any[] = [];
  @Input() selected: boolean | undefined;
  @Output() selectedChange = new EventEmitter<boolean>();


  ngOnInit(): void {
    this.properties = this.serviceService.properties;
  }

  currentPage = 0;
  itemsPerPage = 9;
  sidebarOpen = false;
  menuSidebarOpen: boolean = false;
  selectedProperty: any = null;
  searchTerm: string = '';

  get pagedProperties() {
    if (this.searchTerm) {
      return this.filteredProperties;
    }
    const start = this.currentPage * this.itemsPerPage;
    let end = start + this.itemsPerPage;
    if (this.currentPage === 0) {
      end = Math.min(end, 8);
    }
    return this.properties.slice(start, end);
  }

  get totalPages() {
    const items = this.searchTerm ? this.filteredProperties.length : this.properties.length;
    return Math.ceil(items / this.itemsPerPage);
  }

  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  get filteredProperties() {
    return new FilterPipe().transform(this.properties, this.searchTerm);
  }


  openPropertyDetails(property: any) {
    this.selectedProperty = property;
    this.sidebarOpen = true;
  }

  closePropertyDetails() {
    this.sidebarOpen = false;
    this.selectedProperty = null;
  }

  navigateToAddProperty() {
    this.router.navigate(['/add-property']);
  }

  logout() {
    this.router.navigate(['/login']);
  }
  
  favorite(){
    this.router.navigate(['/favorites'])
  }
  
  toggleSidebar() {
    this.menuSidebarOpen = !this.menuSidebarOpen;
  }

  closeSidebar() {
    this.menuSidebarOpen = false;
  }


  public toggleSelected(event:Event,property:any) {
    event.stopPropagation();
    property.selected = !property.selected;
    this.selectedChange.emit(property.selected);
    if (!property.selected) {
      this.favoriteProperties = this.favoriteProperties.filter(fav => fav.id !== property.id);
      this.serviceService.removeFavoriteProperty(property);
    } else {
      this.favoriteProperties.push(property);
      this.serviceService.addFavoriteProperty(property);
    }

  }

}
