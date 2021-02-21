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
    this.bookService.ajouter(this.book);
  }

  update(){
    console.log(this.book);
    this.bookService.enregistrer(this.book);
  }

}
