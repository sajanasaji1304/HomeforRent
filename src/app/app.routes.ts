import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PropertiesListComponent } from './properties-list/properties-list.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import { FavoriteComponent } from './favorite/favorite.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: PropertiesListComponent },
  {path:'add-property',component:AddPropertyComponent},
  {path:'favorites',component:FavoriteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

