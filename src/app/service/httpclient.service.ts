import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient,HttpRequest } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class HttpclientService {
  url = "/coursedetails.php";
  constructor( private httpOb:HttpClient) { }
  getCourses():Observable<any>{
    const req = new HttpRequest('GET',this.url,{
      reportProgress:true
    });
    console.log('came i getCourses Function');
    return this.httpOb.request(req);
  }
}
