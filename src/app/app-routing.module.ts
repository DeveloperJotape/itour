import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TravelComponent } from './pages/travel/travel.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TravelpageComponent } from './pages/travelpage/travelpage.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'travel', component:TravelComponent},
  {path:'about', component:AboutComponent},
  {path:'travel/:id', component:TravelpageComponent},
  {path:'contact', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
