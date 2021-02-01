import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  makePostRequest(url, body): Observable<any> {
    return this.http.post(
      url,
      body
    );
  }

  makePostRequestToken(url, body, token): Observable<any> {
    const headerDict = {
      'Content-Type': 'application/json',
      'Authorization' : 'Bearer ' + token
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    return this.http.post(
      url,
      body,
      requestOptions
    );
  }

  makeGetRequest(url): Observable<any> {
    return this.http.get(url)
  }

  makeDeleteRequest(url, token): Observable<any>{
    const headerDict = {
      'Content-Type': 'application/json',
      'Authorization' : 'Bearer '+ token
    }

    const  requestOptions = {
      headers : new HttpHeaders(headerDict)
    }

    return this.http.delete(url, requestOptions)
  }

  processJson(jsonResponse){
    return JSON.parse(jsonResponse['result'])
  }
}
