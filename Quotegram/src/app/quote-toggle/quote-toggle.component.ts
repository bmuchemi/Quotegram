import { AlertService } from './../alert-service/alert.service';
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

  alertService: AlertService;

  numberOfLikes : number = 0;
  numberOfDislikes : number = 0;
  
  deleteQuote(isSeen:boolean){
    this.seen.emit(isSeen);
    this.alertService.alertMe('The quote has been successfully deleted!!')
   
  }

  upVote(){
    this.numberOfLikes++;
  }
  downVote(){
    this.numberOfDislikes++;
  }
  constructor(alertService : AlertService) {
    this.alertService = alertService;
   }

  ngOnInit() {
  }

}
