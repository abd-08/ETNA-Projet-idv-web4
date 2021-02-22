import {Component, OnInit} from '@angular/core';
import {environment} from '../../environments/environment';
import {AuthenticationService} from '../services/authentication.service';
import {Book} from '../modele/Book';

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
  hide_admin_menu:boolean=true;
  role:string;
  signinUrl: string = 'http://127.0.0.1:8090/authenticate';



  constructor(public authService: AuthenticationService) {
    this.introLogo = environment.images_urls + 'logo_transparent.png';
  }

  ngOnInit(): void {
    this.checkAutority();
    this.hide_admin_menu= this.role=="ROLE_USER";
    console.log(this.role);
    console.log("hide menu :"+ this.hide_admin_menu);
  }

  j(){
   return this.authService.whoami(
      (result) => {
       return result.role;
      },
      (error) => {
        console.log(error);
        return null;
      }, "http://127.0.0.1:8090/me");
  }

  checkAutority(){

    this.authService.whoami(
      (result) => {
        console.log(result);
        this.role = result.role;
        console.log(this.role);
      },
      (error) => {
        console.log(error);
        this.role="";

      }, "http://127.0.0.1:8090/me");
  console.log(this.role);
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
