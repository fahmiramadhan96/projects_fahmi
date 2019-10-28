import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

import { Post } from './../classes/post';


const localUrl = 'https://jsonplaceholder.typicode.com/users'; 
const httpOptions = {
  headers: new HttpHeaders({
    "Content-type": "application/json; charset=UTF-8"
  })
};

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  private url: string = "https://jsonplaceholder.typicode.com/users";

  constructor(private httpClient: HttpClient) {}

  /* Get User Without Observable*/
  // getUsers(){
  //   return this.httpClient.get(this.url);
  // }

  getUsers() : Observable<any>{
    console.log('masuk1');
    return this.httpClient.get(this.url);
    
  }
  getComment(id:any): Observable<any>{
    let param1 = new HttpParams().set('postId', id);
    return this.httpClient.get("https://jsonplaceholder.typicode.com/comments", {params:param1});
  }
  postData(opost: Post): Observable<any>{
    return this.httpClient.post("https://jsonplaceholder.typicode.com/posts", opost, httpOptions)

  }

}
