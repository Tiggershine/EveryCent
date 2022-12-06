import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardListComponent } from './product-card-list/product-card-list.component';
import { HeaderComponent } from './header/header.component';
import { MainPageNavComponent } from './main-page-nav/main-page-nav.component';
import { FooterComponent } from './footer/footer.component';
import { FloatBtnComponent } from 'src/app/float-btn/float-btn.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardListComponent,
    HeaderComponent,
    MainPageNavComponent,
    FooterComponent,
    FloatBtnComponent,
    ProductDetailPageComponent,
    ProductDescriptionComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
