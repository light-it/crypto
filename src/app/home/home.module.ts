import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../material/material.module';
import { HomeDataService } from './shared/services/home-data.service';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, CardComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
  ],
  providers: [
    HomeDataService
  ]
})
export class HomeModule { }
