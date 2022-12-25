import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardListComponent } from './components/product-card-list/product-card-list.component';
import { HeaderComponent } from './components/header/header.component';
import { MainPageNavComponent } from './components/main-page-nav/main-page-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { FloatBtnComponent } from 'src/app/components/float-btn/float-btn.component';
import { HeaderServiceService } from './services/header-service.service';
import { ProductDescriptionComponent } from './components/product-description/product-description.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProductInformationComponent } from './product-information/product-information.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardListComponent,
    HeaderComponent,
    MainPageNavComponent,
    FooterComponent,
    FloatBtnComponent,
    routingComponents,
    ProductDescriptionComponent,
    ProductDetailPageComponent,
    HeaderComponent,
    SignupPageComponent,
    LoginPageComponent,
    ProductInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HeaderServiceService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
