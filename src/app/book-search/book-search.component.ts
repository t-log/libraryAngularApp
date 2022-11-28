import { Component } from '@angular/core';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent {
  bookTitle = ""
  searchBook = () =>
  {
    let searchData:any = {"title":this.bookTitle}
    console.log(searchData)
  }

}
