import { Component, OnInit } from '@angular/core';
import { Quotes } from './quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quotes[]=[
    new Quotes(1, 'I came, I saw, I conquered.', 'Julias Caeser', 'Benjamin ', new Date(2021,7,17)),
    new Quotes(2, 'Survival isnt who you are, it is who you become.', 'The 100', 'Carol', new Date(2021,6,18))
  ];

  details(i:| number){
    this.quotes[i].showDetail = !this.quotes[i].showDetail;
  }

  addAQuote(quote: Quotes){
    let allQuotesLength = this.quotes.length;
    quote.id = allQuotesLength + 1;
    quote.completeDate = new Date(quote.postDate);
    this.quotes.push(quote);
  }

  deleteQuote(seen: any, index: number){
    if(seen) {
      let toHide = (`Are you sure you want to delete quote?`)
      
      if (toHide){
        this.quotes.splice(index,1);
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
