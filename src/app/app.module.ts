import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ApiService } from './services/api.service';
import { TesterComponent } from './components/tester/tester.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent, FooterComponent, TesterComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
