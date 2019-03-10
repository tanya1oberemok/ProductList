import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductComponent } from './components/product/product.component';

const itemRoutes: Routes = [
  {
     path: 'products', component: ListComponent, children: 
     [
       {
         path: 'products/:id', component: ProductComponent
       }
     ]
    }, 
  {
    path: 'login', component: LogInComponent
  },
  {
    path: 'register', component: RegisterComponent
  }
]

const routes: Routes = [
  {
    path: 'api', component: NavigationComponent, children: itemRoutes
  },
  {
    path: '', component: HomeComponent
  },
  {
    path: 'login', component: LogInComponent, children:
    [
      {
        path: 'register', component: RegisterComponent
      }
    ]
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
