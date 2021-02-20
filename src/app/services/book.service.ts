import { Injectable } from '@angular/core';
import {HttpClientService} from './http-client.service';
import {Book} from '../modele/Book';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpService: HttpClientService) { }




  /**
   * Save a new Customer object in the Backend server data base.
   * @param book
   */
  addBook(onSuccess: Function, onFailure: Function,book: Book){
    let Request =  this.httpService.makePostRequestToken('http://localhost:8090/book', book);
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

  /**
   * Update an existing Customer object in the Backend server data base.
   * @param customer
   */
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

  /**
   * Delete an existing Customer object in the Backend server data base.
   * @param customer
   */
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


}
