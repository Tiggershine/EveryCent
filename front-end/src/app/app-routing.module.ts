import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { ProductRegisterPageComponent } from './pages/product-register-page/product-register-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    data: {
      path: 'main',
    },
  },
  {
    path: 'login',
    component: MainPageComponent,
    data: {
      path: 'login',
    },
  },
  {
    path: 'signup',
    component: MainPageComponent,
    data: {
      path: 'signup',
    },
  },
  {
    path: 'post',
    component: MainPageComponent,
    data: {
      path: 'post',
    },
  },
  {
    path: 'product',
    component: ProductDetailPageComponent,
    data: {
      path: 'product',
    },
  },
  {
    path: 'register',
    component: ProductRegisterPageComponent,
    data: {
      path: 'register',
    },
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [MainPageComponent];
