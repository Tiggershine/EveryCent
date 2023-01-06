import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { ProductRegisterPageComponent } from './pages/product-register-page/product-register-page.component';
import { MypageComponent } from './components/mypage/mypage.component';
import { ProductCardListComponent } from './components/product-card-list/product-card-list.component';
import { AfterSearchComponent } from './pages/after-search/after-search.component';

const routes: Routes = [
  { path: '', component: MainPageComponent,
    data: {
      path: 'main',             
    },
    children: [
      { path: '', component: ProductCardListComponent, },
      { path: 'search', component: AfterSearchComponent, },
    ]
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
  {
    path: 'post', component: ProductRegisterPageComponent,
    data: {
      path: 'post',
    },
  },
  // todo: Add userId to mypage path
  {
    path: 'mypage',
    component: MypageComponent,
    data: {
      path: 'mypage',
    },
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [MainPageComponent];
