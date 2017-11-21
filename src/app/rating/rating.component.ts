import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { IBook } from '../ibook';

@Component({
  selector: 'my-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  constructor() {}
    @Input() rating: number;
    @Input() book: IBook;
    @Output() ratingClicked: EventEmitter<IBook> = new EventEmitter<IBook>();
   

  ngOnInit() {
  }

  ngOnChanges(): void {
    //console.log("The rating was just set to: " + this.rating.toString());
    }
    
    click(rating:number): void {
    this.book.rating = rating;
    this.ratingClicked.emit(this.book);
    }

}
