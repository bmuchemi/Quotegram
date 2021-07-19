import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quotes } from '../quotes/quotes';


@Component({
  selector: 'app-quote-submit',
  templateUrl: './quote-submit.component.html',
  styleUrls: ['./quote-submit.component.css']
})
export class QuoteSubmitComponent implements OnInit {

  newQuote = new Quotes (1,"","","",new Date());
  @Output () addQuote = new EventEmitter<Quotes>();

  submitQuote(){
    this.addQuote.emit(this.newQuote);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}

