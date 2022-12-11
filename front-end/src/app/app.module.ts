import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardListComponent } from './components/product-card-list/product-card-list.component';
import { HeaderComponent } from './components/header/header.component';
import { MainPageNavComponent } from './components/main-page-nav/main-page-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { FloatBtnComponent } from 'src/app/components/float-btn/float-btn.component';
import { HeaderServiceService } from './services/header-service.service';
@NgModule({
  declarations: [
    AppComponent,
    ProductCardListComponent,
    HeaderComponent,
    MainPageNavComponent,
    FooterComponent,
    FloatBtnComponent,
    routingComponents,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [HeaderServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
