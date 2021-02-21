import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {UserService} from '../../services/user.service';
import {BookService} from '../../services/book.service';

@Component({
  selector: 'app-gestionnaire-book',
  templateUrl: './gestionnaire-book.component.html',
  styleUrls: ['./gestionnaire-book.component.scss']
})
export class GestionnaireBookComponent implements OnInit {
  list_book: [{}];
  headElements:string[] = ["Titre","Auteur","Genre","Pages","Quatités","Prix","Sortie","",""];
  vision: boolean = false;

  constructor(public authService: AuthenticationService, public bookService:BookService) { }

  ngOnInit(): void {
    this.bookService.getBook((result) => {
        console.log(result);
        console.log(this.headElements);
        this.list_book = result;
      },
      (error) => {
        console.log(error);
      }, "http://127.0.0.1:8090/books");
  }

  onSearch(value: any) {

  }



  supprimer(book){
    this.bookService.supprimer(book);
  }
}
