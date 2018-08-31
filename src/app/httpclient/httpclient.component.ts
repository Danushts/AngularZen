import { HttpclientService } from './../service/httpclient.service';
import { Component, OnInit } from '@angular/core';
import { HttpRequest,HttpEvent,HttpEventType } from '@angular/common/http';


@Component({
  selector: 'app-httpclient',
  templateUrl: './httpclient.component.html',
  styleUrls: ['./httpclient.component.css']
})
export class HttpclientComponent implements OnInit {
  data;
  constructor( private httpServiceOb:HttpclientService) { }

  ngOnInit() {
    console.log(this.httpServiceOb.getCourses());
    this.httpServiceOb.getCourses().subscribe((event:HttpEvent<any>)=>{
      switch(event.type){
        case HttpEventType.Sent:console.log('Request Sent!');
        break;
        case HttpEventType.ResponseHeader:
        console.log('Request Header received!');
          break;
        case HttpEventType.DownloadProgress:
          console.log(event.loaded); 
          const pvar = Math.round(event.loaded);
          console.log(`in Progress! ${ pvar } bytes loaded`);
          break;
        case HttpEventType.Response:
          console.log('Done!',event.body);
          this.data= event.body;
      }
    })
  }

}
