import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
  { path: "", component: MainPageComponent, 
    data: {
      path: "main"
    }
  },
  { path: "login", component: MainPageComponent, 
    data: {
    path: "login"
    }
  },
  { path: "signup", component: MainPageComponent, 
    data: {
    path: "signup"
    }
  },
  { path: "post", component: MainPageComponent, 
    data: {
    path: "post"
    }
  },
  { path: "product", component: MainPageComponent, 
    data: {
    path: "product"
    }
  },
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ MainPageComponent ];

