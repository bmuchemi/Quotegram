import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quotes } from '../quotes/quotes';

@Component({
  selector: 'app-quote-toggle',
  templateUrl: './quote-toggle.component.html',
  styleUrls: ['./quote-toggle.component.css']
})
export class QuoteToggleComponent implements OnInit {

  @Input()
  quote!: Quotes;
  @Output() seen = new EventEmitter<boolean>();

  numberOfLikes : number = 0;
  numberOfDislikes : number = 0;
  
  deleteQuote(isSeen:boolean){
    this.seen.emit(isSeen);
  }

  upVote(){
    this.numberOfLikes++;
  }
  downVote(){
    this.numberOfDislikes++;
  }
  constructor() { }

  ngOnInit() {
  }

}
