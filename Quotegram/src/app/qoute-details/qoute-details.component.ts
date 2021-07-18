import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quotes } from '../quotes/quotes';

@Component({
  selector: 'app-qoute-details',
  templateUrl: './qoute-details.component.html',
  styleUrls: ['./qoute-details.component.css']
})
export class QouteDetailsComponent implements OnInit {

  @Input()
  quote!: Quotes;
  @Output() seen = new EventEmitter<boolean>();

  numberOfLikes : number = 0;
  numberOfHates : number = 0;

  deleteQuote(isSeen:boolean){
    this.seen.emit(isSeen);
  }

  upVote(){
    this.numberOfLikes++;
  }
  downVote(){
    this.numberOfHates++;
  }
  constructor() { }

  ngOnInit() {
  }

}
