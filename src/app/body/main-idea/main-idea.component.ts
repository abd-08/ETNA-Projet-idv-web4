import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-main-idea',
  templateUrl: './main-idea.component.html',
  styleUrls: ['./main-idea.component.scss']
})
export class MainIdeaComponent implements OnInit {

  homeLogo: string;

  constructor(public loginService: LoginService) {
    this.homeLogo = environment.images_urls + 'home.jpg';
  }

  ngOnInit(): void {
  }

}
