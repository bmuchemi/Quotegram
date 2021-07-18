import { InvokeMethodExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Quotes } from './quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quotes[]=[
    new Quotes(1, 'One, remember to look up at the stars and not down at your feet. Two, never give up work. Work gives you meaning and purpose and life is empty without it. Three, if you are lucky enough to find love, remember it is there and don not throw it away.', 'Stephen Hawking', 'Linda Maina', new Date(2018,2,2)),
    new Quotes(2, 'The price good men pay for indifference to public affairs is to be ruled by evil men.', 'Plato', 'Anonymous', new Date(2018,1,2))
  ];

  details(){
    this.quotes[1].showDetail = !this.quotes[1].showDetail;
  }

  addAQuote(quote: Quotes){
    let allQuotesLength = this.quotes.length;
    quote.id = allQuotesLength + 1;
    quote.completeDate = new Date(quote.postDate);
    this.quotes.push(quote);
  }

  hideQuote(seen: any, index: number){
    if(seen) {
      let toHide = confirm(`Are you sure you want to delete quote?`)
      
      if (toHide){
        this.quotes.splice(index,1);
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
