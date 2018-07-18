import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-container',
  templateUrl: './comment-container.component.html',
  styleUrls: ['./comment-container.component.css']
})
export class CommentContainerComponent implements OnInit {


  comments:string[]=['I liked The Movie ','I love my country'];
  childData:string;
  constructor() { }

  ngOnInit() {
  }
  showChildData(message:string){
    alert(message);
    this.childData=message;
  }

}
