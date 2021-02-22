import { Component, OnInit } from '@angular/core';
import {BookService} from '../../services/book.service';
import {Book} from '../../modele/Book';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  listBook:[Book];

  current = 'https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483097.jpg';


  modification:boolean = false;

  PrintText(title, size): string{
    let res = title;
    if (title.length > size){
      res = res.substring(0, size);
      res = res + '...';
      return res;
    }
    return title;
  }

  constructor(private bookService:BookService) { }

  ngOnInit(): void {
    this.bookService.getBook((result) => {
        console.log(result);
        this.listBook = result
        console.log("books charged");
      },
      (error) => {
        console.log(error);
      },"http://127.0.0.1:8090/books")
  }

  bookOpened(book:Book) {
    localStorage.setItem('openedbook', JSON.stringify(book)); // sync the data
    console.log(localStorage.getItem("openedbook"));
    console.log("book opened")
  }
}
