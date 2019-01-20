import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { VersionComponent } from './version/version.component';
import {AppRoutingModule} from './app-routing.module';
import { CookbookComponent } from './cookBook/cookbook.component';

@NgModule({
  declarations: [
    VersionComponent,
    AppComponent,
    CookbookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
