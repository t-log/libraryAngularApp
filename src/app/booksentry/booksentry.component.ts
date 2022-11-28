import { Component } from '@angular/core';

@Component({
  selector: 'app-booksentry',
  templateUrl: './booksentry.component.html',
  styleUrls: ['./booksentry.component.css']
})
export class BooksentryComponent {
  title =""
  author =""
  description = ""
  publisher = ""
  language = ""
  distributor = ""
  releasedYear = ""
  price = ""
  upload =""

  bookEntry = () =>
  {
    let bookEntryData = {"title":this.title,"author":this.author,"description":this.description,
                          "publisher":this.publisher,"language":this.language,"distributor":this.distributor,
                          "releasedYear":this.releasedYear,"price":this.price,"upload":this.upload
                        }
    console.log(bookEntryData)
  }
}
