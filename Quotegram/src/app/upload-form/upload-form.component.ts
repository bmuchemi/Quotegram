import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css']
})
export class UploadFormComponent implements OnInit {

  newQuote = new Quotes (0,"","","",new Date());
  @Output () addQuote = new EventEmitter<Quotes>();

  submitQuote(){
    this.addQuote.emit(this.newQuote);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}

