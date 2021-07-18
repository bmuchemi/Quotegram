import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteToggleComponent } from './quote-toggle/quote-toggle.component';
import { QuoteSubmitComponent } from './quote-submit/quote-submit.component';
import { TimeCountPipe } from './time-count.pipe';
@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuoteToggleComponent,
    QuoteSubmitComponent,
    TimeCountPipe,
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
