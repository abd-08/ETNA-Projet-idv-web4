import {Component, OnInit} from '@angular/core';
import {environment} from '../../environments/environment';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  introLogo: string;
  public isMenuCollapsed = true;
  username: string= "abd@gmail.com";
  password: string= "password";
  signinUrl: string = 'http://127.0.0.1:8090/authenticate';


  constructor(public authService: AuthenticationService) {
    this.introLogo = environment.images_urls + 'logo_transparent.png';
  }

  ngOnInit(): void {
  }

  makeAuth() {
    this.authService.makeAuth(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      }, this.username,
      this.password, this.signinUrl
    );
  }

  delete(){
    console.log("suppression");
    this.authService.removeUser(
      (result) => {
        console.log(result);
        this.authService.logout();
        console.log("success delete");
      },
      (error) => {
        console.log("echec supprimer");
        console.log(error);
      },'http://127.0.0.1:8090/delete'
    )
  }

  disconnected() {
    this.authService.logout();
  }

  checkConnected(){
    return this.authService.checkLogin();
  }
}
