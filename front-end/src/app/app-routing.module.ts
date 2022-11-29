import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
  { path: "", component: MainPageComponent, 
    data: {
      // Header-property
      leftIcon: '../../assets/icons/everycent.svg',
      rightIconWeb1: '../../assets/icons/loginBtn.svg',
      rightIconWeb2: '../../assets/icons/signupBtn.svg',
      rightIconMobile: '../../assets/icons/loginIcon.svg',
      leftIconLink: 'MainPageComponent',
      rightIconWeb1Link: 'LoginPageComponent',
      rightIconWeb2Link: 'SignupPageComponent',
      rightIconMobileLink: 'LoginPageComponent',
      rightBtn1Show: true,
      rightBtn2Show: true,
      rightBtnMobileShow: true

    }
  },
  { path: "login", component: MainPageComponent, 
    data: {
      leftIcon: '../../assets/icons/backIcon.svg',
      rightIconWeb1: '../../assets/icons/loginBtn.svg',
      rightIconWeb2: '../../assets/icons/member.svg',
      rightIconMobile: '../../assets/icons/homeIcon.svg',
      leftIconLink: 'MainPageComponent',
      rightIconWeb1Link: 'LoginPageComponent',
      rightIconWeb2Link: 'SignupPageComponent',
      rightIconMobileLink: 'LoginPageComponent',
      rightBtn1Show: false,
      rightBtn2Show: true,
      rightBtnMobileShow: true
    }
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ MainPageComponent ];

