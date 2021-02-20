import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestionnaire-address',
  templateUrl: './gestionnaire-address.component.html',
  styleUrls: ['./gestionnaire-address.component.scss']
})
export class GestionnaireAddressComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSearch(data) {
    console.log(data);
  }
}
