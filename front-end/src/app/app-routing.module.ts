import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component'; 
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { ProductInformationComponent } from './product-information/product-information.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    data: {
      path: 'main',
    },
  },
  { path: "login", component: LoginPageComponent, 
    data: {
      path: 'login',
    },
  },
  { path: "signup", component: SignupPageComponent, 
    data: {
      path: 'signup',
    },
  },
  // todo: change Component to PageComponent
  { path: "post", component: ProductInformationComponent, 
    data: {
      path: 'post',
    },
  },
  { path: "products/:productId", component: ProductDetailPageComponent, 
    data: {
    path: "products/:productId"
    }
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [MainPageComponent];
