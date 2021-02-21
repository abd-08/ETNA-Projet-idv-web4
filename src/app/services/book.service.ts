import { Injectable } from '@angular/core';
import {HttpClientService} from './http-client.service';
import {Book} from '../modele/Book';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpService: HttpClientService) { }

  addBook(onSuccess: Function, onFailure: Function, book:Book , url){
    let Request =  this.httpService.makePostRequestToken(url, book);
    Request.subscribe((result) => {
        onSuccess(result);
        console.log(result);
        return result;
      },
      error => {
        onFailure(error);
        return error;
      });
  }

  ajouter(book:Book){
    this.addBook((result) => {
        console.log(result);
        return(result);
        console.log("book added");
      },
      (error) => {
        console.log(error);
      },book, 'http://127.0.0.1:8090/book');
  }

  updateBook(onSuccess: Function, onFailure: Function,book: Book, url){
    let Request =  this.httpService.makePutRequestToken(url,book);
    Request.subscribe((result) => {
        onSuccess(result);
        console.log(result);
        return result;
      },
      error => {
        onFailure(error);
        return error;
      });
  }

  enregistrer(book:Book){
    this.updateBook((result) => {
         console.log(result);
         console.log("book updated");
       },
       (error) => {
         console.log(error);
       }, book , 'http://127.0.0.1:8090/book/'+book.id);
  }


  deleteBook(onSuccess: Function, onFailure: Function,url){
    let Request =  this.httpService.makeDeleteRequestToken(url);
    Request.subscribe((result) => {
        onSuccess(result);
        console.log(result);
        return result;
      },
      error => {
        onFailure(error);
        return error;
      });
  }

  supprimer(book:Book){
    this.deleteBook(
      (result) => {
        console.log(result);
        console.log("book supprimer");
      },
      (error) => {
        console.log(error);
      }, "http://127.0.0.1:8090/book/"+book.id)

  }




  getBook(onSuccess: Function, onFailure: Function,url){
    let Request =  this.httpService.makeGetRequestToken(url);
    Request.subscribe((result) => {
        onSuccess(result);
        console.log(result);
        return result;
      },
      error => {
        onFailure(error);
        return error;
      });
  }

  charge(id:number){
    this.getBook(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      }, "http://127.0.0.1:8090/book/"+id)
  }


}
