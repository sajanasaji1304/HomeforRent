import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-property',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-property.component.html',
  styleUrl: './add-property.component.css'
})
export class AddPropertyComponent {
  formData: any = {};
  @ViewChild('Image') imageInput!: ElementRef<HTMLInputElement>;
  property: any =  {
    name: '',
    location: '',
    price: '',
    description: '',
    bedrooms: null,
    bathrooms: null,
    owner: {
      name: '',
      contact: '',
      address: '',
      email: ''
    },
    image:''
  };
  fileToUpload: any;
  imageUrl: any;
  

  constructor(private serviceService: ServiceService,private router: Router) {}

  handleFileInput(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input && input.files && input.files.length > 0) {
      const file = input.files[0];
      this.handleFile(file);
    }
  }

  handleFile(file: File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.property.image = reader.result as string;
    };
  }

  submitForm() {
    console.log(this.property);
    this.serviceService.addProperty(this.property);
    this.property={}
    this.property.owner={}
    this.imageInput.nativeElement.value = '';
  }

  logout(){
    this.router.navigate(['/login'])
  }

  goHome(){
    this.router.navigate(['/home'])
  }
  
}
