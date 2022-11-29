import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardListComponent } from './product-card-list/product-card-list.component';
import { HeaderComponent } from './header/header.component';
<<<<<<< Updated upstream
import { MainPageNavComponent } from './main-page-nav/main-page-nav.component';
import { FooterComponent } from './footer/footer.component';
import { FloatBtnComponent } from 'src/app/float-btn/float-btn.component';
=======
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    ProductCardListComponent,
    HeaderComponent,
<<<<<<< Updated upstream
    MainPageNavComponent,
    FooterComponent,
    FloatBtnComponent,
    routingComponents
=======
    FooterComponent,
    routingComponents,
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
