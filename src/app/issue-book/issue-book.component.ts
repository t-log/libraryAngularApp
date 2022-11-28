import { Component } from '@angular/core';

@Component({
  selector: 'app-issue-book',
  templateUrl: './issue-book.component.html',
  styleUrls: ['./issue-book.component.css']
})
export class IssueBookComponent {
  name=""
  title=""
  doi=""
  membershipNo = ""

  issueBook = () =>
  {
    let issueData = {"name":this.name,"title":this.title,"doi":this.doi,"membershipNo":this.membershipNo}
    console.log(issueData)
  }
}
