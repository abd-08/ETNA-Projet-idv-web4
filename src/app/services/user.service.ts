import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../modele/User';
import {Observable} from 'rxjs';
import {HttpClientService} from './http-client.service';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private response: any;

  public tokenResult = new EventEmitter<any>();

  private helper;

  constructor(private httpService: HttpClientService) {
    this.helper = new JwtHelperService();
  }

  list_user= [
    {
      id: "1", username: "Paul", password: "test", role: "ROLE_USER",
    creation_date: "2012-12-1",last_modification_date: "2012-12-1"
     }
  ]


  /**
   * Save a new Customer object in the Backend server data base.
   * @param book
   */
  saveUser(onSuccess: Function, onFailure: Function,user: User){
    let Request =  this.httpService.makePostRequest('http://localhost:8090/register', user);
    Request.subscribe((result) => {
        this.response = result;
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
  updateUser(onSuccess: Function, onFailure: Function,user: User, url){
    let Request =  this.httpService.makePutRequestToken(url,user);
    Request.subscribe((result) => {
        this.response = result;
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
  deleteUser(onSuccess: Function, onFailure: Function,url){
    let Request =  this.httpService.makeDeleteRequestToken(url);
    Request.subscribe((result) => {
        this.response = result;
        onSuccess(result);
        console.log(result);
        return result;
      },
      error => {
        onFailure(error);
        return error;
      });
  }


  getUser(onSuccess: Function, onFailure: Function,url){
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


  whoami() {
    return this.httpService.makeGetRequestToken('http://localhost:8090/me');
  }



}
