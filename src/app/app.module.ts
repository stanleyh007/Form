import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {InternshipsService} from "./internship.service";
import {InternshipsComponent} from "./internships.component";
import {InternshipEntryComponent} from "./internship.component";
import {AboutComponent} from "./about.component";
import {HomeComponent} from "./home.component";
import {routing} from "./app-routing";
import {AComponent} from "./a.component";
import {BComponent} from "./b.component";

@NgModule({
  declarations: [
    AppComponent,
    InternshipEntryComponent,
    AboutComponent,
    HomeComponent,
    InternshipsComponent,
    AComponent,
    BComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [InternshipsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
