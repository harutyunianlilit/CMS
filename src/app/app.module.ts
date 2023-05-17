import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PagesListComponent } from './pages-list/pages-list.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireModule } from '@angular/fire/compat';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [{ path: '', component: PagesListComponent },
{ path: 'login', component: LoginPageComponent },];

@NgModule({
  declarations: [AppComponent, PagesListComponent, LoginPageComponent],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
