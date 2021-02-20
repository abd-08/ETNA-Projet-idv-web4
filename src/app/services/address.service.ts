import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpClientService} from './http-client.service';
import {JwtHelperService} from '@auth0/angular-jwt';
import {User} from '../modele/User';
import {Address} from '../modele/Address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private response: any;

  public tokenResult = new EventEmitter<any>();

  private helper;

  constructor(private httpService: HttpClientService) {
    this.helper = new JwtHelperService();
  }

  /**
   * Save a new Customer object in the Backend server data base.
   * @param book
   */
  saveCustomer(onSuccess: Function, onFailure: Function,address: Address){
    let Request =  this.httpService.makePostRequest('http://localhost:8090/register', address);
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
  updateCustomer(onSuccess: Function, onFailure: Function,address: Address, url){
    let Request =  this.httpService.makePutRequestToken(url,address);
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
  deleteAddress(onSuccess: Function, onFailure: Function,url){
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


  getAddress(onSuccess: Function, onFailure: Function,url){
    let Request =  this.httpService.makeGetRequestToken(url);
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

}
