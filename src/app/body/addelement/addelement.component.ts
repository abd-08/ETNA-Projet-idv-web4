import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../../modele/Book';
import {BookService} from '../../services/book.service';

@Component({
  selector: 'app-addelement',
  templateUrl: './addelement.component.html',
  styleUrls: ['./addelement.component.scss'],

})
export class AddelementComponent implements OnInit {

  @Input() book:Book = new Book() ;
  @Input() ajout=true;

  constructor(public bookService:BookService) {
  }


  ngOnInit(): void {

  }

  addbook() {
    console.log(this.book);
    this.bookService.addBook((result) => {
        console.log(result);
        console.log('book added');
      },
      (error) => {
        console.log(error);
      }, this.book);
  }

  update(){
    this.bookService.updateBook((result) => {
        console.log(result);
        console.log("book updated");
      },
      (error) => {
        console.log(error);
      }, this.book , 'http://127.0.0.1:8090/book/'+this.book.id);
  }

}
