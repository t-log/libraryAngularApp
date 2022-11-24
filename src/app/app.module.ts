import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RouterModule, Routes } from '@angular/router';
import { BooksentryComponent } from './booksentry/booksentry.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { IssueBookComponent } from './issue-book/issue-book.component';
import { NavbarComponent } from './navbar/navbar.component';

const myRoute:Routes = [{path:"",component:AdminLoginComponent},
                        {path:"entry",component:BooksentryComponent},
                        {path:"search",component:BookSearchComponent},
                        {path:"delete",component:BookDeleteComponent},
                        {path:"edit",component:EditBookComponent},
                        {path:"issue",component:IssueBookComponent},
                       ]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    BooksentryComponent,
    BookSearchComponent,
    BookDeleteComponent,
    EditBookComponent,
    IssueBookComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
