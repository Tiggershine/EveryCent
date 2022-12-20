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
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from './pages/login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardListComponent,
    HeaderComponent,
    MainPageNavComponent,
    FooterComponent,
    FloatBtnComponent,
    routingComponents,
    HeaderComponent,
    SignupPageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HeaderServiceService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
