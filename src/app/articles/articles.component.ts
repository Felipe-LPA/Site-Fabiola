import { ArticlesService } from './articles.service';
import { Post } from './post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  constructor(private articlesService:ArticlesService ) { }

  posts:Post[] = [
    {
      title: "Title 1",
      banner: "../../assets/bannerPost1.jpg",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
    },
    {
      title: "Title 2",
      banner: "../../assets/bannerPost2.jpg",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
    },
    {
      title: "Title 3",
      banner: "../../assets/bannerPost3.jpg",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
    }
  ]

  ngOnInit(): void {
    // this.articlesService.getBlogPosts().subscribe(blogs => console.log(blogs))
  }

}
