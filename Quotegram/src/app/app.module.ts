import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QouteDetailsComponent } from './qoute-details/qoute-details.component';
import { UploadFormComponent } from './upload-form/upload-form.component';
@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QouteDetailsComponent,
    UploadFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
