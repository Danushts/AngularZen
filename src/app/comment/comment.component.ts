import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input()
  comment:string;

  @Output() sendMessage : EventEmitter<string> =new EventEmitter<string>();
  constructor() { }
  message:string;
  ngOnInit() {
  }

  emitMessage(){
    this.sendMessage.emit(this.message);
  }

}
