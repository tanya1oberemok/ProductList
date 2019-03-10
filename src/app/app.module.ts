import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ListsService } from './services/lists.service';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    LogInComponent,
    NavigationComponent,
    RegisterComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ListsService, 
    AuthService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
