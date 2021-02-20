import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Address} from '../../modele/Address';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  address:Address=new Address();
  visualisation:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }

  getter(champ:String){
    if (this.address!=null){
      switch (champ){
        case "street" :
          return this.address.street;
          break;

        case "country":
          return this.address.country;
          break;

        case "city":
          return this.address.city;
          break;

        case "postal_code":
          return 73000;
          break;


        default :
          return "error";
      }
    }
    return "";
  }


  change_mode(){
    if (this.visualisation == true) this.visualisation = false;
    else this.visualisation = true;
  }

  creerAdress(addAddressForm: NgForm) {

  }
}
