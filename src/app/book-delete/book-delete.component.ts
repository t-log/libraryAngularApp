import { Component } from '@angular/core';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent {

  title = ""
  deleteBook = () =>
  {
    let deleteData:any = {"title":this.title}
    console.log(deleteData)
  }
}
