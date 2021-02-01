import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  introLogo: string;
  public isMenuCollapsed = true;


  constructor() {
    this.introLogo = environment.images_urls + 'logo_transparent.png';
  }

  ngOnInit(): void {
  }

}
