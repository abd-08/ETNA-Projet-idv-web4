import { Injectable, EventEmitter } from '@angular/core';
import {HttpService} from './http.service';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private response: any;

  public tokenResult = new EventEmitter<any>();

  private helper;

  constructor(private httpService: HttpService) {
    this.helper = new JwtHelperService();
  }

  makeAuth(onSuccess: Function, onFailure: Function, username: String, password: String, loginSign: string) {
    let requestParams = {
      username: username,
      password: password
    }

    let postRequest = this.httpService.makePostRequest(loginSign, requestParams)
    postRequest.subscribe(
      (result) => {
        this.response = result;
        let login = {
          username: requestParams.username,
          token: this.response.token
        }
        this.tokenResult.emit(login)
        localStorage.setItem('login', JSON.stringify(login)); // sync the data
        onSuccess(result)
      },
      error => {
        onFailure(error)
      }
    )
  }

  checkLogin(){
    let savedToken = JSON.parse(localStorage.getItem('login') || '[]')
    let isExpired = this.helper.isTokenExpired(savedToken.token);
    if(isExpired == false){
      this.tokenResult.emit(savedToken)
    }else{
      localStorage.removeItem('login');
      this.tokenResult.emit([])
    }
    return savedToken != '';
  }

  getToken(){
    let savedToken = JSON.parse(localStorage.getItem('login') || '[]')
    let isExpired = this.helper.isTokenExpired(savedToken.token);
    if(isExpired){
      console.log("Token expired")
      this.checkLogin()
    }else{
      return savedToken.token
    }
  }

  logout(){
    localStorage.removeItem('login');
    let login = {
      username: '',
      token: ''
    }
    this.tokenResult.emit({
      login
    })
  }
}
