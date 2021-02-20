import { Component, OnInit } from '@angular/core';
import {User} from '../../modele/User';
import {AuthenticationService} from '../../services/authentication.service';
import {UserService} from '../../services/user.service';


@Component({
  selector: 'app-gestionnaire-user',
  templateUrl: './gestionnaire-user.component.html',
  styleUrls: ['./gestionnaire-user.component.scss']
})
export class GestionnaireUserComponent implements OnInit {
  public list_user: User[] = [];
  list: any;
  constructor(public authService: AuthenticationService, public userService:UserService) { }

  ngOnInit(): void {
  }

  onSearch(data) {
    this.userService.getUser( (result) => {
        console.log(result);
        this.list_user = result;
      },
      (error) => {
        console.log(error);
      }, "http://127.0.0.1:8090/users");
  }
}
