import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { ProductRegisterPageComponent } from './pages/product-register-page/product-register-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent,
    data: {
      path: 'main',
    },
  },
  {
    path: 'products/:productId', component: ProductDetailPageComponent,
    data: {
      path: 'products/:productId',
    },
  },    
  {
    path: 'login', component: LoginPageComponent,
    data: {
      path: 'login',
    },
  },
  {
    path: 'signup', component: SignupPageComponent,
    data: {
      path: 'signup',
    },
  },
  // todo: change Component to PageComponent
  {
    path: 'post', component: ProductRegisterPageComponent,
    data: {
      path: 'post',
    },
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [MainPageComponent];
