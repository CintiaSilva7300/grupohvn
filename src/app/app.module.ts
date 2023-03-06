import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componets/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './componets/not-found/not-found.component';
import { HomeComponent } from './screens/home/home.component';
import { CarouselComponent } from './componets/carousel/carousel.component';
import { CardComponent } from './componets/card/card.component';
import { LoginComponent } from './screens/login/login.component';
import { FooterComponent } from './componets/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotFoundComponent,
    HomeComponent,
    CarouselComponent,
    CardComponent,
    LoginComponent,
    FooterComponent,
    // RellaxDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
