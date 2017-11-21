import { Component, OnInit } from '@angular/core';
import { IBook } from '../ibook';
import { MdSnackBar } from "@angular/material";
import { MdDialog } from "@angular/material";
import { DataService } from '../services/data.service';
import { Router } from "@angular/router";
import { BookDetailComponent } from '../book-detail/book-detail.component';
import { NewBookComponent } from '../new-book/new-book.component';


@Component({

  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  constructor(private _dataService: DataService, private _snackBar: MdSnackBar,
    private _dialog: MdDialog, private _router: Router) {
    this.startTime = new Date();
    this.startTime.setHours(10, 0);
    this.endTime = new Date();
    this.endTime.setHours(15, 0);
  }

  ngOnInit(): void {
    this.getBooks();
  }

  pageTitle: string = 'Books';
  public books: Array<IBook> =
  [
    {
      id: 1,
      title: "JavaScript - The Good Parts",
      author: "Douglas Crockford",
      isCheckedOut: true,
      rating: 3
    },
    {
      id: 2,
      title: "The Wind in the Willows",
      author: "Kenneth Grahame",
      isCheckedOut: false,
      rating: 4
    },
    {
      id: 3,
      title: "Pillars of the Earth",
      author: "Ken Follett",
      isCheckedOut: true,
      rating: 5
    },
    {
      id: 4,
      title: "Harry Potter and the Prisoner of Azkaban",
      author: "J. K. Rowling",
      isCheckedOut: false,
      rating: 5
    }
  ];
  startTime: Date;
  endTime: Date;
  showOperatingHours: boolean = false;

  getBooks(): void {
    this._dataService.getBooks()
      .subscribe(
      books => this.books = books,
      error => this.updateMessage(<any>error, 'ERROR'));
  }

  addBook(): void {
    let config = {
      width: '650px', height: '650px', position: { top: '50px' },
      disableClose: true
    };
    let dialogRef = this._dialog.open(NewBookComponent, config);
    dialogRef.afterClosed().subscribe(newBook => {
      if (newBook) {
        newBook.id = this.books.length + 1;
        this._dataService.addBook(newBook)
          .subscribe(
          books => this.books = books,
          error => this.updateMessage(<any>error, 'ERROR'));
      }
    });
  }

  updateMessage(message: string, type: string): void {
    if (message) {
      this._snackBar.open(`${type}: ${message}`, 'DISMISS', {
        duration: 3000
      });
    }
  }
  onRatingUpdate(book: IBook): void {
    this.updateBook(book);
    this.updateMessage(book.title, " Rating has been updated");
  }
  updateBook(book: IBook): void {
    this._dataService.updateBook(book)
      .subscribe(
      books => {
        this.books = books;
        this._snackBar.open(`"${book.title}" has been updated!`,
          'DISMISS', {
            duration: 3000
          });
      }, error => this.updateMessage(<any>error, 'ERROR'));
  }
  openDialog(bookId: number): void {
    let config = {
      width: '650px', height: '400px', position: { top: '50px' }
    };

    let dialogRef = this._dialog.open(BookDetailComponent, config);

    dialogRef.componentInstance.bookId = bookId;

    dialogRef.afterClosed().subscribe(res => {
      this.getBooks();
    });
  }
  openRoute(bookId: number): void {
    this._router.navigate(['/collection', bookId]);
  }
}
