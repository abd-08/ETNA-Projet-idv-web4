import { Component, OnInit } from '@angular/core';
import {BookService} from '../../services/book.service';
import {Book} from '../../modele/Book';

@Component({
  selector: 'app-gestionnaire-book',
  templateUrl: './gestionnaire-book.component.html',
  styleUrls: ['./gestionnaire-book.component.scss']
})
export class GestionnaireBookComponent implements OnInit {
  list_book: Book[];
  newBook:Book = new Book();
  headElements:string[] = ["Titre","Auteur","Pages","Quatités","Prix","Sortie"];
  mode_ajout:boolean=false;

  constructor( public bookService:BookService) { }

  ngOnInit(): void {
    this.bookService.getBook((result) => {
        console.log(result);
        this.list_book = result;
      },
      (error) => {
        console.log(error);
      }, "http://127.0.0.1:8090/books");
  }

  onSearch(value: any) {

  }

  change_mode(){
    if (this.mode_ajout) this.mode_ajout=false;
    else this.mode_ajout=true;
  }

  ajouter(book:Book){
    console.log(book);
    book.description="";
    book.pages=0;
    book.quantity=0;
    book.price=0;
    this.bookService.ajouter(book);
    this.list_book.unshift(book);
  }


  supprimer(book:Book){
    this.bookService.supprimer(book);
    let index = this.list_book.indexOf(book);
    if (index > -1) {
     this.list_book.splice(index, 1);
    }
  }


  enregistrer(book: Book) {
    this.bookService.enregistrer(book);
    let index = this.list_book.indexOf(book);
    if (index > -1) {
      this.list_book[index] = book;
    }
    book.vision=false;
  }

  modifier(book:Book){
    if(book.vision) book.vision=false;
    else book.vision=true;
  }
}
