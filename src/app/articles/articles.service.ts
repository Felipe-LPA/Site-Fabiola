import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService{

  constructor(private http: HttpClient) { }

  url = "https://www.googleapis.com/blogger/v3/blogs/3220464565325735989/posts?key=AIzaSyA5hOLGd5a3LRPBzwcZ-kB-z3F1OCsIaa8"


  getBlogPosts(){
    return this.http.get(this.url)
  }

  
}
