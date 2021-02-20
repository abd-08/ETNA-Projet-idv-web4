import {EventEmitter, Injectable} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {HttpClientService} from './http-client.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private response: any;

  public tokenResult = new EventEmitter<any>();

  private helper;

  constructor(private httpService: HttpClientService) {
    this.helper = new JwtHelperService();
  }

  makeAuth(onSuccess: Function, onFailure: Function, username: String, password: String, loginUrl: string) {
    let requestParams = {
      username: username,
      password: password
    }

    let postRequest = this.httpService.makePostRequest(loginUrl, requestParams)
    postRequest.subscribe(
      (result) => {
        this.response = result;
        let login = {
          username: requestParams.username,
          token: this.response.token
        }
        this.tokenResult.emit(login)
        localStorage.setItem('login', JSON.stringify(login)); // sync the data
        console.log(localStorage.getItem("login").length);
        onSuccess(result)
      },
      error => {
        onFailure(error)
      }
    )
  }

  whoami( onSuccess: Function, onFailure: Function,loginUrl: string) {

      let Request = this.httpService.makeGetRequestToken(loginUrl );
      Request.subscribe((result) => {
          this.response = result;
          onSuccess(result);
          console.log(result);
          return result;
        },
        error => {
          onFailure(error);
          this.logout();
          return error;
        }
      )
  }

  updateUser(onSuccess: Function, onFailure: Function, username: String, password: String, loginUrl: string) {
    let requestParams = {
      username: username,
      password: password
    }

    let putRequest = this.httpService.makePutRequestToken(loginUrl, requestParams)
    putRequest.subscribe(
      (result) => {
        this.response = result;
        let login = {
          username: requestParams.username,
          token: this.response.token
        }
        this.tokenResult.emit(login)
        localStorage.setItem('login', JSON.stringify(login)); // sync the data
        console.log(localStorage.getItem("login"));
        onSuccess(result)
      },
      error => {
        onFailure(error)
      }
    )
  }

  removeUser(onSuccess: Function, onFailure: Function, loginUrl: string) {
    let postRequest = this.httpService.makeDeleteRequestToken(loginUrl);
    postRequest.subscribe(
      (result) => {
        this.response = result;
        onSuccess(result);
      },
      error => {
        onFailure(error);
      }
    );
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
