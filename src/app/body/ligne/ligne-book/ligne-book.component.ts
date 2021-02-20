import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../../../modele/Book';
import {BookService} from '../../../services/book.service';

@Component({
  selector: 'app-ligne-book',
  templateUrl: './ligne-book.component.html',
  styleUrls: ['./ligne-book.component.scss']
})
export class LigneBookComponent implements OnInit {
  @Input( ) book:Book=new Book();
  vision=true;
  constructor(public bookService:BookService) { }



  ngOnInit(): void {

  }

  modifier(){
    if (this.vision) this.vision =false;
    else this.vision =true;
  }

  enregistrer(){
    if (this.vision) this.vision =false;
    else this.vision =true;
    this.bookService.updateBook((result) => {
        console.log(result);
        this.modifier();
        console.log("book updated");
      },
      (error) => {
        console.log(error);
      }, this.book , 'http://127.0.0.1:8090/book/'+this.book.id);
  }


  supprimer(){
    let url = 'http://127.0.0.1:8090/book';
    this.bookService.deleteBook(
      (result) => {
        console.log(result);
        console.log("book supprimer");
      },
      (error) => {
        console.log(error);
      }, url+"/"+this.book.id)

  }


}
